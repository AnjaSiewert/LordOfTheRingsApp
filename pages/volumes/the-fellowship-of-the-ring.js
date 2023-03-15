import { Fragment } from "react";
import { volumes } from "../../lib/data";

const volume1 = volumes.find(
  ({ slug }) => slug === "the-fellowship-of-the-ring"
);

export default function VolumesNo1() {
  return (
    <>
      <h1>{volume1.title}</h1>
      <p>{volume1.description}</p>
      <ul>
        {volume1.books.map((book) => {
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
