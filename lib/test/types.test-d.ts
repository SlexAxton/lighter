import { expectTypeOf, test } from "vitest";
import {
  AnnotatedLighterResult,
  highlight,
  highlightSync,
  LighterResult,
  preload,
} from "../src";

test("highlight sync types", async () => {
  await preload(["typescript"], "base16");
  const notAnnotatedResult = highlightSync(
    "const x = 1;",
    "typescript",
    "base16"
  );
  const annotatedResult = highlightSync(
    "const x = 1;",
    "typescript",
    "base16",
    {
      annotations: [],
    }
  );

  expectTypeOf(notAnnotatedResult).toMatchTypeOf<LighterResult>();
  expectTypeOf(annotatedResult).toMatchTypeOf<AnnotatedLighterResult>();
});

test("highlight types", async () => {
  const notAnnotatedResult = await highlight(
    "const x = 1;",
    "typescript",
    "base16",
    {}
  );
  const annotatedResult = await highlight(
    "const x = 1;",
    "typescript",
    "base16",
    {
      annotations: [],
    }
  );

  expectTypeOf(notAnnotatedResult).toMatchTypeOf<LighterResult>();
  expectTypeOf(annotatedResult).toMatchTypeOf<AnnotatedLighterResult>();
});
