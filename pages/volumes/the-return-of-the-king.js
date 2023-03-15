import { Fragment } from "react";
import { volumes } from "../../lib/data";

const volume3 = volumes.find(({ slug }) => slug === "the-return-of-the-king");

export default function VolumesNo3() {
  return (
    <>
      <h1>{volume3.title}</h1>
      <p>{volume3.description}</p>
      <ul>
        {volume3.books.map((book) => {
          return (
            <Fragment key={book.title}>
              <li>{book.title}</li>
              <li>{book.ordinal}</li>
              <br />
            </Fragment>
          );
        })}
      </ul>
    </>
  );
}
