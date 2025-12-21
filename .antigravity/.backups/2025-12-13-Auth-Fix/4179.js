"use strict";exports.id=4179,exports.ids=[4179],exports.modules={7721:(a,b,c)=>{Object.defineProperty(b,"__esModule",{value:!0}),Object.defineProperty(b,"unstable_rethrow",{enumerable:!0,get:function(){return function a(b){if((0,g.isNextRouterError)(b)||(0,f.isBailoutToCSRError)(b)||(0,i.isDynamicServerError)(b)||(0,h.isDynamicPostpone)(b)||(0,e.isPostpone)(b)||(0,d.isHangingPromiseRejectionError)(b)||(0,h.isPrerenderInterruptedError)(b))throw b;b instanceof Error&&"cause"in b&&a(b.cause)}}});let d=c(62217),e=c(16474),f=c(28595),g=c(92103),h=c(58916),i=c(30522);("function"==typeof b.default||"object"==typeof b.default&&null!==b.default)&&void 0===b.default.__esModule&&(Object.defineProperty(b.default,"__esModule",{value:!0}),Object.assign(b.default,b),a.exports=b.default)},17786:(a,b,c)=>{c.d(b,{Lb:()=>f,Lz:()=>g,n6:()=>e,nI:()=>h});var d=c(72193);let e=(0,d.A)`{
  "header": {
    "title": coalesce(*[_type == "siteSettings"][0].changelogTitle, "Changelog"),
    "subtitle": *[_type == "siteSettings"][0].changelogSubtitle,
    "socialLinksTitle": *[_type == "siteSettings"][0].socialLinksTitle,
    "socialLinks": coalesce(
      *[_type == "siteSettings"][0].socialLinks[]{
        "id": coalesce(_key, _id),
        "url": url,
        "label": coalesce(label, title, name),
        "iconUrl": icon.asset->url
      },
      []
    )
  },
  "posts": *[_type == "changelogPost"] | order(publishedAt desc){
    "_id": coalesce(_id, slug.current),
    "title": coalesce(title, _title, name),
    "slug": slug.current,
    "excerpt": coalesce(excerpt, summary),
    "publishedAt": coalesce(publishedAt, _createdAt),
    "image": {
      "url": coalesce(coverImage.asset->url, image.asset->url),
      "width": coalesce(coverImage.asset->metadata.dimensions.width, image.asset->metadata.dimensions.width),
      "height": coalesce(coverImage.asset->metadata.dimensions.height, image.asset->metadata.dimensions.height),
      "aspectRatio": coalesce(coverImage.asset->metadata.dimensions.aspectRatio, image.asset->metadata.dimensions.aspectRatio),
      "blurDataURL": coalesce(coverImage.asset->metadata.lqip, image.asset->metadata.lqip),
      "alt": coalesce(coverImage.alt, image.alt, title)
    },
    "authors": coalesce(authors[]->{
      "_id": _id,
      "name": coalesce(name, _title),
      "imageUrl": coalesce(image.asset->url, avatar.asset->url)
    }, []),
  }
}`,f=(0,d.A)`*[_type == "changelogPost" && slug.current == $slug][0]{
  "_id": coalesce(_id, slug.current),
  "title": coalesce(title, _title),
  "slug": slug.current,
  "excerpt": coalesce(excerpt, summary),
  "publishedAt": coalesce(publishedAt, _createdAt),
  "ogImage": {
    "url": coalesce(ogImage.asset->url, coverImage.asset->url, image.asset->url),
    "alt": coalesce(ogImage.alt, coverImage.alt, image.alt, title)
  },
  "image": {
    "url": coalesce(coverImage.asset->url, image.asset->url),
    "width": coalesce(coverImage.asset->metadata.dimensions.width, image.asset->metadata.dimensions.width),
    "height": coalesce(coverImage.asset->metadata.dimensions.height, image.asset->metadata.dimensions.height),
    "aspectRatio": coalesce(coverImage.asset->metadata.dimensions.aspectRatio, image.asset->metadata.dimensions.aspectRatio),
    "blurDataURL": coalesce(coverImage.asset->metadata.lqip, image.asset->metadata.lqip),
    "alt": coalesce(coverImage.alt, image.alt, title)
  },
  "authors": coalesce(authors[]->{
    "_id": _id,
    "name": coalesce(name, _title),
    "imageUrl": coalesce(image.asset->url, avatar.asset->url)
  }, []),
  body,
  "nextPost": *[_type == "changelogPost" && publishedAt < ^.publishedAt] | order(publishedAt desc)[0]{
    "title": coalesce(title, _title),
    "slug": slug.current
  }
}`,g=(0,d.A)`*[_type == "changelogPost" && defined(slug.current)]{
  "slug": slug.current
}`,h=(0,d.A)`*[_type == "changelogPost" && (
  title match $query ||
  _title match $query ||
  excerpt match $query ||
  summary match $query ||
  body[].children[].text match $query
)][0..10]{
  "_id": coalesce(_id, slug.current),
  "title": coalesce(title, _title, name),
  "slug": slug.current,
  "excerpt": coalesce(excerpt, summary),
  "publishedAt": coalesce(publishedAt, _createdAt),
  "image": {
    "url": coalesce(coverImage.asset->url, image.asset->url),
    "width": coalesce(coverImage.asset->metadata.dimensions.width, image.asset->metadata.dimensions.width),
    "height": coalesce(coverImage.asset->metadata.dimensions.height, image.asset->metadata.dimensions.height),
    "aspectRatio": coalesce(coverImage.asset->metadata.dimensions.aspectRatio, image.asset->metadata.dimensions.aspectRatio),
    "blurDataURL": coalesce(coverImage.asset->metadata.lqip, image.asset->metadata.lqip),
    "alt": coalesce(coverImage.alt, image.alt, title)
  },
  "authors": coalesce(authors[]->{
    "_id": _id,
    "name": coalesce(name, _title),
    "imageUrl": coalesce(image.asset->url, avatar.asset->url)
  }, [])
}`},27095:(a,b,c)=>{var d=c(34527);c.o(d,"notFound")&&c.d(b,{notFound:function(){return d.notFound}}),c.o(d,"redirect")&&c.d(b,{redirect:function(){return d.redirect}})},34527:(a,b,c)=>{Object.defineProperty(b,"__esModule",{value:!0});var d={ReadonlyURLSearchParams:function(){return f.ReadonlyURLSearchParams},RedirectType:function(){return h.RedirectType},forbidden:function(){return j.forbidden},notFound:function(){return i.notFound},permanentRedirect:function(){return g.permanentRedirect},redirect:function(){return g.redirect},unauthorized:function(){return k.unauthorized},unstable_isUnrecognizedActionError:function(){return m},unstable_rethrow:function(){return l.unstable_rethrow}};for(var e in d)Object.defineProperty(b,e,{enumerable:!0,get:d[e]});let f=c(53406),g=c(45880),h=c(88567),i=c(96234),j=c(76363),k=c(53726),l=c(61098);function m(){throw Object.defineProperty(Error("`unstable_isUnrecognizedActionError` can only be used on the client."),"__NEXT_ERROR_CODE",{value:"E776",enumerable:!1,configurable:!0})}("function"==typeof b.default||"object"==typeof b.default&&null!==b.default)&&void 0===b.default.__esModule&&(Object.defineProperty(b.default,"__esModule",{value:!0}),Object.assign(b.default,b),a.exports=b.default)},45880:(a,b,c)=>{Object.defineProperty(b,"__esModule",{value:!0});var d={getRedirectError:function(){return i},getRedirectStatusCodeFromError:function(){return n},getRedirectTypeFromError:function(){return m},getURLFromRedirectError:function(){return l},permanentRedirect:function(){return k},redirect:function(){return j}};for(var e in d)Object.defineProperty(b,e,{enumerable:!0,get:d[e]});let f=c(20501),g=c(88567),h=c(19121).actionAsyncStorage;function i(a,b,c=f.RedirectStatusCode.TemporaryRedirect){let d=Object.defineProperty(Error(g.REDIRECT_ERROR_CODE),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});return d.digest=`${g.REDIRECT_ERROR_CODE};${b};${a};${c};`,d}function j(a,b){throw i(a,b??=h?.getStore()?.isAction?g.RedirectType.push:g.RedirectType.replace,f.RedirectStatusCode.TemporaryRedirect)}function k(a,b=g.RedirectType.replace){throw i(a,b,f.RedirectStatusCode.PermanentRedirect)}function l(a){return(0,g.isRedirectError)(a)?a.digest.split(";").slice(2,-2).join(";"):null}function m(a){if(!(0,g.isRedirectError)(a))throw Object.defineProperty(Error("Not a redirect error"),"__NEXT_ERROR_CODE",{value:"E260",enumerable:!1,configurable:!0});return a.digest.split(";",2)[1]}function n(a){if(!(0,g.isRedirectError)(a))throw Object.defineProperty(Error("Not a redirect error"),"__NEXT_ERROR_CODE",{value:"E260",enumerable:!1,configurable:!0});return Number(a.digest.split(";").at(-2))}("function"==typeof b.default||"object"==typeof b.default&&null!==b.default)&&void 0===b.default.__esModule&&(Object.defineProperty(b.default,"__esModule",{value:!0}),Object.assign(b.default,b),a.exports=b.default)},53406:(a,b)=>{Object.defineProperty(b,"__esModule",{value:!0}),Object.defineProperty(b,"ReadonlyURLSearchParams",{enumerable:!0,get:function(){return d}});class c extends Error{constructor(){super("Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams")}}class d extends URLSearchParams{append(){throw new c}delete(){throw new c}set(){throw new c}sort(){throw new c}}("function"==typeof b.default||"object"==typeof b.default&&null!==b.default)&&void 0===b.default.__esModule&&(Object.defineProperty(b.default,"__esModule",{value:!0}),Object.assign(b.default,b),a.exports=b.default)},53726:(a,b,c)=>{function d(){throw Object.defineProperty(Error("`unauthorized()` is experimental and only allowed to be used when `experimental.authInterrupts` is enabled."),"__NEXT_ERROR_CODE",{value:"E411",enumerable:!1,configurable:!0})}Object.defineProperty(b,"__esModule",{value:!0}),Object.defineProperty(b,"unauthorized",{enumerable:!0,get:function(){return d}}),c(36243).HTTP_ERROR_FALLBACK_ERROR_CODE,("function"==typeof b.default||"object"==typeof b.default&&null!==b.default)&&void 0===b.default.__esModule&&(Object.defineProperty(b.default,"__esModule",{value:!0}),Object.assign(b.default,b),a.exports=b.default)},61098:(a,b,c)=>{Object.defineProperty(b,"__esModule",{value:!0}),Object.defineProperty(b,"unstable_rethrow",{enumerable:!0,get:function(){return d}});let d=c(7721).unstable_rethrow;("function"==typeof b.default||"object"==typeof b.default&&null!==b.default)&&void 0===b.default.__esModule&&(Object.defineProperty(b.default,"__esModule",{value:!0}),Object.assign(b.default,b),a.exports=b.default)},76363:(a,b,c)=>{function d(){throw Object.defineProperty(Error("`forbidden()` is experimental and only allowed to be enabled when `experimental.authInterrupts` is enabled."),"__NEXT_ERROR_CODE",{value:"E488",enumerable:!1,configurable:!0})}Object.defineProperty(b,"__esModule",{value:!0}),Object.defineProperty(b,"forbidden",{enumerable:!0,get:function(){return d}}),c(36243).HTTP_ERROR_FALLBACK_ERROR_CODE,("function"==typeof b.default||"object"==typeof b.default&&null!==b.default)&&void 0===b.default.__esModule&&(Object.defineProperty(b.default,"__esModule",{value:!0}),Object.assign(b.default,b),a.exports=b.default)},84750:(a,b,c)=>{c.d(b,{x:()=>i});var d=c(97620),e=c(25939),f=c(55708),g=c.n(f);let h=[{href:"https://www.linkedin.com/company/bespoke-ethos",label:"LinkedIn",icon:"/assets/logo-square-light.png",url:"https://www.linkedin.com/company/bespoke-ethos"}];function i({className:a="",contentClassName:b="",socialLinks:c,socialLinksTitle:f,children:i}){let j=c?.length&&c.some(a=>a.href)?c:h;return(0,d.jsx)("div",{className:`flex items-center justify-between border-b border-border dark:border-dark-border ${a}`,children:(0,d.jsxs)("div",{className:`mx-auto flex w-full max-w-(--breakpoint-md) flex-col items-start justify-between gap-4 border-r border-border px-8 py-24 dark:border-dark-border md:flex-row md:items-center ${b}`,children:[i,(0,d.jsxs)("div",{className:"flex items-center gap-2 md:flex-col",children:[(0,d.jsx)("p",{className:"text-sm text-text-tertiary dark:text-dark-text-tertiary",children:f??"Stay in the loop"}),(0,d.jsx)("div",{className:"flex gap-2",children:j.map(a=>{let b=a.href??a.url;return b?(0,d.jsx)(g(),{className:"aspect-square hover:brightness-90",href:b,rel:"noreferrer",target:"_blank",children:(0,d.jsx)(e.default,{alt:a.label??"Social link",height:18,src:a.icon??"/assets/logo-square-light.png",width:18})},b):null})})]})]})})}},90263:(a,b,c)=>{c.d(b,{f:()=>k});var d=c(607);let e=process.env.SANITY_PROJECT_ID,f=process.env.SANITY_DATASET,g=process.env.SANITY_API_VERSION||"2025-02-01",h=process.env.SANITY_API_TOKEN,i="1"===(process.env.SKIP_REMOTE_DATA??"1").trim(),j=e&&f&&!i?(0,d.UU)({projectId:e,dataset:f,apiVersion:g,useCdn:!h,token:h,perspective:"published"}):null;async function k(a,b={}){return j?j.fetch(a,b):null}},96234:(a,b,c)=>{Object.defineProperty(b,"__esModule",{value:!0}),Object.defineProperty(b,"notFound",{enumerable:!0,get:function(){return f}});let d=c(36243),e=`${d.HTTP_ERROR_FALLBACK_ERROR_CODE};404`;function f(){let a=Object.defineProperty(Error(e),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});throw a.digest=e,a}("function"==typeof b.default||"object"==typeof b.default&&null!==b.default)&&void 0===b.default.__esModule&&(Object.defineProperty(b.default,"__esModule",{value:!0}),Object.assign(b.default,b),a.exports=b.default)}};