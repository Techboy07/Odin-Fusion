import Feat from "./Feat";

export default function FeatureSection({ features }) {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-5xl font-medium title-font text-light-font underline">
            Features{" "}
          </h1>
        </div>
        <div className="flex flex-wrap -m-4">
          {features.map(({ icon, heading, text }) => {
            return <Feat icon={icon} heading={heading} text={text} />;
          })}
        </div>
      </div>
    </section>
  );
}
