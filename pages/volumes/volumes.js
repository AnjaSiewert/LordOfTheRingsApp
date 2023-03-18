import { introduction } from "../../lib/data";
import Link from "next/link";
import { volumes } from "../../lib/data";
import Image from "next/image";
import StyledList from "../../components/StyledList";
import StyledListElement from "../../components/StyledListElement";
import StyledHeadline2 from "../../components/StyledHeadline2";
import StyledDescription from "../../components/StyledDescription";
import StyledHeadline1 from "../../components/StyledHeadline1";

export default function Volumes() {
  return (
    <div>
      <StyledDescription>
        <StyledHeadline1>Lord of the Rings</StyledHeadline1>
        <p>{introduction}</p>
        <StyledHeadline2>All Volumes</StyledHeadline2>
      </StyledDescription>
      <StyledList>
        {volumes.map(({ slug, title, cover }) => {
          return (
            <StyledListElement key={slug}>
              <Link href={`/volumes/${slug}`} />
              <Image src={cover} alt={title} width={70} height={100} />
              <p>{title}</p>
            </StyledListElement>
          );
        })}
      </StyledList>

      <br />
      <button type="button">Go to random volume</button>
    </div>
  );
}
