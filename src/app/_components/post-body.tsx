import MoreContent from "../../../public/assets/blog/hello-world/MoreContent";
import BodyImage from "./body-image";
import BodyImage2 from "./body-image2";
import markdownStyles from "./markdown-styles.module.css";

type Props = {
  title: string;
  content: string;
  bodyImage: string;
  bodyImage2: string;
};

export function PostBody({ title, content, bodyImage, bodyImage2 }: Props) {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8 md:mb-16 sm:mx-0">
        <BodyImage title={title} src={bodyImage} />
      </div>
      <div
        className={markdownStyles["markdown"]}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    <div className="mb-8 md:mb-16 sm:mx-0">
    <BodyImage2 title={title} src={bodyImage2} />
  </div>
  </div>
  );
}
