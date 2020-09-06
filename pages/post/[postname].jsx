import Link from 'next/link';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';

import Layout from '@components/Layout/Layout';
import Tag from '@components/Common/Tag/Tag';
import Image from '@components/Common/Image/Image';
import getSlugs from '@utils/getSlugs';
import styles from './post.module.css';

export default function BlogPost({ siteTitle, frontmatter, markdownBody }) {

  const renderers = {
    image: Image
  };

  if (!frontmatter) return <></>;
  return (
    <>
      <Layout pageTitle={`${siteTitle} | ${frontmatter.title}`}>
        <div className={styles.back}>
          ←{' '}
          <Link href="/">
            <a>Back to post list</a>
          </Link>
        </div>
        <article className={styles.postContent}>
          <div className={styles.titleContainer}>
            <h1>{frontmatter.title}</h1>
            <Tag tag={frontmatter.tag} tagtype={frontmatter.tag} />
          </div>
          {frontmatter.hero_image && (
            <img src={frontmatter.hero_image} className={styles.hero} alt={frontmatter.title} />
          )}
          <>
            <ReactMarkdown renderers={renderers} source={markdownBody} />
          </>
          <div className={styles.back}>
            ←{' '}
            <Link href="/">
              <a>Back to post list</a>
            </Link>
          </div>
        </article>
      </Layout>
    </>
  );
}

export async function getStaticProps({ ...ctx }) {
  const { postname } = ctx.params;

  const content = await import(`../../posts/${postname}.md`);
  const config = await import(`../../siteconfig.json`);
  const data = matter(content.default);
  return {
    props: {
      siteTitle: config.title,
      frontmatter: data.data,
      markdownBody: data.content,
    },
  };
}

export async function getStaticPaths() {
  const blogSlugs = ((context) => {
    return getSlugs(context);
  })(require.context('../../posts', true, /\.md$/));

  const paths = blogSlugs.map((slug) => `/post/${slug}`);

  return {
    paths, // An array of path names, and any params
    fallback: false, // so that 404s properly appear if something's not matching
  };
}
