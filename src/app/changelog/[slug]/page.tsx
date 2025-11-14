import { notFound } from "next/navigation";
import Link from "next/link";
import { BaseHubImage } from "basehub/next-image";
import { RichText } from "basehub/react-rich-text";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import type { Metadata } from "next";

import { Pump } from "basehub/react-pump";
import { Heading } from "@/common/heading";
import { authorFragment, optimizedImageFragment } from "@/lib/basehub/fragments";
import { CodeSnippet } from "@/app/_components/code-snippet";
import { richTextBaseComponents, richTextClasses } from "@/app/_components/rich-text";
import { ButtonLink } from "@/common/button";
import { AvatarsGroup } from "@/common/avatars-group";
import { Author } from "@/common/avatar";
import { basehub } from "basehub";
import { formatDate } from "@/utils/dates";

import { ChangelogLayout } from "../_components/changelog-header";
import { PageView } from "@/app/_components/page-view";
import { draftMode } from "next/headers";

const SKIP_REMOTE_DATA = (process.env.SKIP_REMOTE_DATA ?? "").trim() === "1";

// Pre-render known slugs at build and allow ISR fallback
export const revalidate = 1800;

interface ChangelogPageParams {
  params: Promise<{
    slug: string;
  }>;
}

export const generateStaticParams = async () => {
  if (SKIP_REMOTE_DATA) {
    return [];
  }

  const data = await basehub({ cache: "no-store" }).query({
    site: {
      changelog: {
        posts: {
          items: {
            _slug: true,
          },
        },
      },
    },
  });

  return data.site.changelog.posts.items.map((post) => {
    return {
      slug: post._slug,
    };
  });
};

export const generateMetadata = async ({
  params: _params,
}: ChangelogPageParams): Promise<Metadata | undefined> => {
  const params = await _params;

  if (SKIP_REMOTE_DATA) {
    const siteUrl =
      process.env.NEXT_PUBLIC_SITE_URL || "https://www.bespokeethos.com";

    return {
      title: "Changelog entry",
      description:
        "Changelog content will return once the Sanity migration is complete.",
      alternates: { canonical: `/changelog/${params.slug}` },
      openGraph: {
        url: `${siteUrl}/changelog/${params.slug}`,
      },
    };
  }

  const data = await basehub({ draft: (await draftMode()).isEnabled }).query({
    site: {
      settings: {
        metadata: {
          titleTemplate: true,
          sitename: true,
        },
      },
      changelog: {
        posts: {
          __args: {
            filter: {
              _sys_slug: { eq: params.slug },
            },
            first: 1,
          },
          items: {
            _title: true,
            excerpt: true,
            ogImage: { url: true },
            _id: true,
          },
        },
      },
    },
  });

  const post = data.site.changelog.posts.items[0];

  if (!post) return undefined;

  const images = [{ url: post.ogImage.url, alt: post._title }];

  return {
    title: post._title,
    description: post.excerpt,
    alternates: { canonical: `/changelog/${params.slug}` },
    openGraph: {
      images,
    },
    twitter: {
      images,
      card: "summary_large_image",
      site: data.site.settings.metadata.sitename,
    },
  };
};

async function renderBaseHubSlugPage(params: { slug: string }) {
  return (
    <Pump
      queries={[
        {
          site: {
            generalEvents: { ingestKey: true },
            changelog: {
              goBackText: true,
              posts: {
                __args: {
                  filter: {
                    _sys_slug: { eq: params.slug },
                  },
                  first: 1,
                },
                items: {
                  _analyticsKey: true,
                  _title: true,
                  excerpt: true,
                  publishedAt: true,
                  _slug: true,
                  image: optimizedImageFragment,
                  authors: authorFragment,
                  body: {
                    json: {
                      content: true,
                      blocks: {
                        __typename: true,
                        on_CodeSnippetComponent: {
                          _id: true,
                          _title: true,
                          code: {
                            code: true,
                            language: true,
                            allowedLanguages: true,
                          },
                        },
                      },
                      __typename: true,
                    },
                  },
                },
              },
            },
          },
        },
        {
          site: {
            changelog: {
              posts: {
                items: {
                  _slug: true,
                  _title: true,
                },
                __args: {
                  orderBy: "publishedAt__DESC",
                },
              },
            },
          },
        },
      ]}
    >
      {async ([
        {
          site: { changelog, generalEvents },
        },
        allPosts,
      ]) => {
        "use server";
        const post = changelog.posts.items.at(0);

        if (!post) return notFound();

        const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.bespokeethos.com";
        const postUrl = `${siteUrl}/changelog/${params.slug}`;
        const breadcrumb = {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
            {
              "@type": "ListItem",
              position: 2,
              name: "Changelog",
              item: `${siteUrl}/changelog`,
            },
            { "@type": "ListItem", position: 3, name: post._title, item: postUrl },
          ],
        } as const;

        const postsList =
          allPosts && allPosts.site && allPosts.site.changelog.posts.items;

        const postIndex = postsList
          ? postsList.findIndex((p) => p._slug === post._slug)
          : -1;
        const nextPost =
          postsList && postIndex >= 0
            ? postsList[postIndex + 1] ?? postsList[0]
            : null;

        return (
          <>
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(breadcrumb),
              }}
            />
            <PageView ingestKey={generalEvents.ingestKey} />
            <ChangelogLayout>
              <div className="flex flex-col gap-1">
                <Link
                  className="text-text-tertiary dark:text-dark-text-tertiary flex w-max items-center gap-1 text-sm hover:underline md:text-sm"
                  href={`/changelog#${post._slug}`}
                >
                  <ArrowLeftIcon /> {changelog.goBackText}
                </Link>
                <Heading align="left">
                  <h1>{post._title}</h1>
                </Heading>
                <p className="text-text-tertiary dark:text-dark-text-tertiary text-sm md:text-base">
                  {formatDate(post.publishedAt)}
                </p>
              </div>
            </ChangelogLayout>
            <div className="mx-auto flex max-w-(--breakpoint-md) flex-col gap-8 px-8 pt-16 pb-20">
              <BaseHubImage
                priority
                alt={post.image.alt ?? post._title}
                blurDataURL={post.image.blurDataURL}
                className="h-auto w-full rounded-xl"
                height={post.image.height}
                placeholder="blur"
                src={post.image.url}
                style={{ aspectRatio: post.image.aspectRatio }}
                width={post.image.width}
              />
              <p className="text-text-secondary dark:text-dark-text-secondary text-sm md:text-base">
                {post.excerpt}
              </p>
              <div className={richTextClasses}>
                <RichText
                  blocks={post.body.json.blocks}
                  components={{
                    ...richTextBaseComponents,
                    CodeSnippetComponent: CodeSnippet,
                  }}
                >
                  {post.body.json.content}
                </RichText>
              </div>
              <div className="flex items-center justify-between">
                {post.authors.length > 1 ? (
                  <AvatarsGroup animate>
                    {post.authors.map((author: (typeof post.authors)[number]) => (
                      <Author {...author} key={author._id} />
                    ))}
                  </AvatarsGroup>
                ) : post.authors[0] ? (
                  <div className="flex items-center gap-2">
                    <Author {...post.authors[0]} />
                    <p className="text-text-secondary dark:text-dark-text-secondary text-sm md:text-base">
                      {post.authors[0]._title}
                    </p>
                  </div>
                ) : null}

                {nextPost ? (
                  <ButtonLink
                    className="text-text-tertiary dark:text-dark-text-tertiary text-sm hover:underline"
                    href={`/changelog/${nextPost._slug}`}
                    icon={<ArrowRightIcon />}
                    iconSide="right"
                    intent="secondary"
                  >
                    {nextPost._title.slice(0, 35)}
                    {nextPost._title.length > 35 ? "..." : ""}
                  </ButtonLink>
                ) : null}
              </div>
            </div>
          </>
        );
      }}
    </Pump>
  );
}

export default async function ChangelogPage({ params: _params }: ChangelogPageParams) {
  const params = await _params;

  if (SKIP_REMOTE_DATA) {
    return (
      <ChangelogLayout>
        <div className="flex flex-col gap-1">
          <Link
            className="text-text-tertiary dark:text-dark-text-tertiary flex w-max items-center gap-1 text-sm hover:underline md:text-sm"
            href="/changelog"
          >
            <ArrowLeftIcon /> Back to changelog
          </Link>
          <Heading align="left">
            <h1>Changelog entry</h1>
          </Heading>
          <p className="text-text-tertiary dark:text-dark-text-tertiary text-sm md:text-base">
            Changelog detail pages are temporarily disabled while we migrate to
            Sanity. The URL {params.slug} will become active once the new CMS is live.
          </p>
        </div>
      </ChangelogLayout>
    );
  }

  return renderBaseHubSlugPage(params);
}
