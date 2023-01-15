import React from 'react';
import './styles.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/features/easy.svg').default,
    description: (
      <>
        Start using the library in the fastest possible way without
        configurations.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/features/focus.svg').default,
    description: (
      <>Save hundreds of development hours and focus on your product</>
    ),
  },
  {
    title: 'Run everywhere',
    Svg: require('@site/static/img/features/everywhere.svg').default,
    description: (
      <>React, React Native, Angular, Vue, JS, TS, etc... we have it all</>
    ),
  },
  {
    title: 'Fast and powerful',
    Svg: require('@site/static/img/features/powerful.svg').default,
    description: (
      <>We focus on improving your application by doing more with less code</>
    ),
  },
  {
    title: 'Themeable',
    Svg: require('@site/static/img/features/themeable.svg').default,
    description: <>Create as many themes as you want in an easy and fast way</>,
  },
  {
    title: 'Powered by Typescript and SASS',
    Svg: require('@site/static/img/features/powered.svg').default,
    description: <>Components for all needs</>,
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className="col col--4 p-md">
      <div className="round-md p-md feat-card glass">
        <div className="text--center">
          <Svg className="w-3xl h-3xl" role="img" />
        </div>
        <div className="text--center padding-horiz--md">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className="features mt-xl m-md">
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
