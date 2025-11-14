import { draftMode } from "next/headers";

import { Pump } from "basehub/react-pump";
import { Heading } from "@/common/heading";
import { ChangelogLayout } from "./_components/changelog-header";
import { changelogListFragment } from "./_components/changelog.fragment";
import { ChangelogListWrapper as ChangelogList } from "./_components/changelog-list-wrapper";
import { PageView } from "../_components/page-view";
import type { Metadata } from "next";
import { basehub } from "basehub";
import { notFound } from "next/navigation";

const SKIP_REMOTE_DATA = (process.env.SKIP_REMOTE_DATA ?? "").trim() === "1";

export const dynamic = "force-dynamic";

export const generateMetadata = async (): Promise<Metadata | undefined> => {
  if (SKIP_REMOTE_DATA) {
    return {
      title: "Changelog",
      description:
        "A changelog of Bespoke Ethos releases. Content will return once the new CMS is available.",
      alternates: { canonical: "/changelog" },
    };
  }

  const data = await basehub({ draft: (await draftMode()).isEnabled }).query({
    site: {
      changelog: {
        metadata: {
          title: true,
          description: true,
        },
      },
    },
  });

  return {
    title: data.site.changelog.metadata.title ?? undefined,
    description: data.site.changelog.metadata.description ?? undefined,
    alternates: { canonical: "/changelog" },
  };
};

async function renderBaseHubChangelog() {
  return (
    <Pump
      queries={[
        {
          site: {
            changelog: {
              _analyticsKey: true,
              title: true,
              subtitle: true,
              posts: {
                __args: {
                  orderBy: "publishedAt__DESC",
                },
                items: changelogListFragment,
              },
            },
            generalEvents: {
              ingestKey: true,
            },
          },
        },
      ]}
    >
      {async ([
        {
          site: { changelog, generalEvents },
        },
      ]) => {
        "use server";

        if (changelog.posts.items.length === 0) {
          return notFound();
        }

        return (
          <>
            <PageView ingestKey={generalEvents.ingestKey} />
            <ChangelogLayout>
              <Heading
                align="left"
                className="flex-1 flex-col-reverse!"
                subtitle={changelog.subtitle}
              >
                <h1>{changelog.title}</h1>
              </Heading>
            </ChangelogLayout>
            <div className="mx-auto max-w-(--breakpoint-md) px-8 pt-16">
              <ChangelogList changelogPosts={changelog.posts.items} />
            </div>
          </>
        );
      }}
    </Pump>
  );
}

export default async function ChangelogPage() {
  if (SKIP_REMOTE_DATA) {
    return (
      <ChangelogLayout>
        <Heading
          align="left"
          className="flex-1 flex-col-reverse!"
          subtitle="Content is being migrated to Sanity."
        >
          <h1>Changelog</h1>
        </Heading>
      </ChangelogLayout>
    );
  }

  return renderBaseHubChangelog();
}
