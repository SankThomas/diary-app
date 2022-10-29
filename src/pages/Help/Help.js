import React from "react";
import { Link } from "react-router-dom";
import { MobileBar, Sidebar } from "../../components";

export default function Help() {
  return (
    <>
      <section className="px-5">
        <article>
          <MobileBar />
          <Sidebar />
        </article>

        <article className="md:max-w-xl md:mx-auto lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl pt-10 pb-32 lg:py-14">
          <h1 className="font-bold text-3xl lg:text-4xl text-slate-800 mb-10">
            Markdown Help
          </h1>
          <Link
            to="/diarry"
            className="text-indigo-600 underline active:text-orange-400"
          >
            &larr; Back to Homepage
          </Link>
          <p className="mt-10 text-slate-600 text-sm leading-relaxed lg:text-base lg:leading-loose">
            Don't know how to use Markdown? That's okay. This guide will tell
            you all you need to know. I'll keep it short and sweet. NOTE: I have
            applied additional styling to the examples to help you understand
            them better. Try out the examples in the text editor on the{" "}
            <Link to="/diarry" className="text-indigo-600 underline">
              Diarry Page
            </Link>{" "}
            to see how they work.
          </p>

          <ol
            start="1"
            className="list-decimal pl-5 text-slate-600 mt-4 flex flex-col gap-3 text-sm lg:text-base"
          >
            <li>Separate paragraphs with blank lines.</li>
            <code>
              First paragraph <br /> <br />
              Second paragraph
            </code>
            <li>Make lists by starting lines with hyphens or numbers.</li>
            <code>- A list item starting with a hyphen</code>
            <code>1. A list item starting with a number</code>
            <li>Italicize text by surrounding it with single asterisks.</li>
            <code className="italic">*This text is italicized*</code>

            <li>Make text bold by surrounding it with double asterisks.</li>
            <code className="font-bold">**This text is in bold**</code>

            <li>
              Write inline code snippets by surrounding code with single
              backticks
            </li>
            <code>`console.log("This is an inline code snippet")`</code>
            <li>Create larger code blocks by wrapping code in 3 backticks</li>
            <code>
              ```This is a larger code block spanning multiple lines```
            </code>
            <li>
              Create links by wrapping text with square brackets and the URL in
              parentheses [Text](https://link.com)
            </li>
            <code>[Text](https://link.com)</code>
            <li>
              To add images, begin with an exclamation(!) mark, then square
              brackets that will contain text that will show up in case the
              image fails to load, and finally parentheses linking to the image.
            </li>
            <code>
              ![Text that appears if the image fails to
              load](https://link-to-the-image.jpg)
            </code>
            <p>The link to the image can also be a relative path such as:</p>
            <code>![alt text](./relative-path-to-the-image.jpg)</code>
          </ol>
        </article>
      </section>
    </>
  );
}
