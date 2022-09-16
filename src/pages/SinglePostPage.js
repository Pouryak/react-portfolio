import React from "react";
import { useParams } from "react-router-dom";
import WorksData from "../data/works/WorksData";

import Main from "../components/layouts/Main";
import SinglePost from "../components/layouts/SinglePost";

const SingePostPage = ({ type }) => {
  const params = useParams();
  const work = WorksData.find((work) => work.id === params.workId);

  return (
    <Main>
      <SinglePost
        title={work.title}
        year={work.year}
        img={work.img}
        description={work.description}
        features={work.features}
        tags={work.tags}
      />
    </Main>
  );
};

export default SingePostPage;
