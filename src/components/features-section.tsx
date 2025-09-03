import FeatureCard from "./feature-card";

const features = [
  {
    title:
      "1. Add the widget to your website. Or use one of our landing pages.",
    description:
      "Our widget is easy to install and can be added to your website in minutes. Or you can use one of our landing pages to get started faster.",
  },
  {
    title:
      "2. Add the widget to your website. Or use one of our landing pages.",
    description:
      "Our widget is easy to install and can be added to your website in minutes. Or you can use one of our landing pages to get started faster.",
  },
  {
    title:
      "3. Add the widget to your website. Or use one of our landing pages.",
    description:
      "Our widget is easy to install and can be added to your website in minutes. Or you can use one of our landing pages to get started faster.",
  },
];

export default function FeaturesSection() {
  return (
    <section>
      <div className="CONTENT grid grid-cols-3 gap-8">
        {features.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>
    </section>
  );
}
