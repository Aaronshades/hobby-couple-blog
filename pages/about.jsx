import styles from './about/about.module.css';

import Layout from '@components/Layout/Layout';

const About = ({ title, description, ...props }) => {
  return (
    <>
      <Layout pageTitle={`${title} | About`} description={description}>
        <section className={styles.aboutPage}>
          <div className={styles.imageContainer}>Image of something nice</div>
          <div className={styles.textContainer}>
            <h1 className="title">This is us!</h1>
            <p>This is going to be the about us page.</p>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default About;

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`);

  return {
    props: {
      title: configData.default.title,
      description: configData.default.description,
    },
  };
}
