import React, { useState } from "react";
import { useRouter } from "next/router";
import mockNewsEvent from "@/app/mocks/news-event.json";
import NotFound from "@/app/components/NotFound";

const NewsEventPage: React.FC = () => {
  const router = useRouter();
  const id = Array.isArray(router.query.id)
    ? router.query.id[0]
    : typeof router.query.id === "string"
    ? router.query.id
    : undefined;
  const article = mockNewsEvent.find((p) => p.alias === id);

  const HasArticle = () => (
    <div className="flex flex-col justify-center items-center text-5xl w-full h-screen text-primary">
      Coming soon...
    </div>
  );

  return <>{article ? <HasArticle /> : <NotFound type="Article" />}</>;
};

export default NewsEventPage;
