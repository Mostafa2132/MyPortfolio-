import { gridItems } from "../../../data";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";

export default function About() {
  return (
    <section className="overflow-hidden" id="about">
      <BentoGrid className="overflow-hidden">
        {gridItems.map(
          ({
            id,
            img,
            className,
            description,
            imgClassName,
            spareImg,
            title,
            titleClassName,
          }) => (
            <BentoGridItem
              id={id}
              key={id}
              title={title}
              description={description}
              className={className}
              img={img}
              imgClassName={imgClassName}
              titleClassName={titleClassName}
              spareImg={spareImg}
            />
          )
        )}
      </BentoGrid>
    </section>
  );
}
