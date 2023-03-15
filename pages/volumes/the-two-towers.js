import Link from "next/link";
import { Fragment } from "react";
import { volumes } from "../../lib/data";

const volume2 = volumes.find(({ slug }) => slug === "the-two-towers");

export default function VolumesNo2() {
  return (
    <>
      <h1>{volume2.title}</h1>
      <p>{volume2.description}</p>
      <ul>
        {volume2.books.map((book) => {
          return (
            <Fragment key={book.title}>
              <li>{book.title}</li>
              <li>{book.ordinal}</li>
              <br />
            </Fragment>
          );
        })}
      </ul>
      <Link href="/">Back to HomePage</Link>
    </>
  );
}
