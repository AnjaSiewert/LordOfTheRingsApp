import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment } from "react";
import { volumes } from "../../lib/data";
import Image from "next/image";

export default function VolumeDetail() {
  const router = useRouter();
  const { volumeSlug } = router.query;
  const volume = volumes.find(({ slug }) => slug === volumeSlug);

  if (!volume) {
    return null;
  }

  return (
    <>
      <Link href="/">◀︎Back to HomePage</Link>
      <h1>{volume.title}</h1>
      <p>{volume.description}</p>
      <ul>
        {volume.books.map((book) => {
          return (
            <Fragment key={book.title}>
              <li>{book.title}</li>
              <li>{book.ordinal}</li>
              <br />
            </Fragment>
          );
        })}
      </ul>
      <Image src={volume.cover} alt={volume.title} width={140} height={230} />
    </>
  );
}
