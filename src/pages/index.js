import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'New Mods and Patches',
    imageUrl: 'img/icons8-puzzle.svg',
    description: (
      <>
        The main reason we're here, finding new mods and patches to add into the Living Skyrim modlist! These will be of varying levels of compatibility, ease of addition to the list, and recommendation from other members of the Living Skyrim community.
      </>
    ),
  },
  {
    title: 'Guides and Resources',
    imageUrl: 'img/icons8-info.svg',
    description: (
      <>
        For those new to doing their own modding, there are guides and links to outside resources for learning and using modding tools.
      </>
    ),
  },
  {
    title: 'Custom Modlist Changes and Fixes',
    imageUrl: 'img/icons8-support.svg',
    description: (
      <>
        The base modlist for Living Skyrim is great, but everyone has different priorities and customizations. Included are temporary bugfixes between official Living Skyrim releases, and per-user changes, recommendations, and examples for changing the base modlist before any extras arrive.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Home`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/mods')}>
              To The Mods!
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}
