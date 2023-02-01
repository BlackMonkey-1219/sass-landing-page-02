import React, { useEffect, useState } from "react";
import Container from "../Container/Container";
import FilterPanel from "../FilterPanel/FilterPanel";
import ProjectCard from "../ProjectCard/ProjectCard";

import { projects } from "../../data/projects";

type Project = {
  name: string;
  type: number;
  desc: string;
  link: string;
};

function SectionFour() {
  const [filteredProjects, setFilteredProjects] = useState<Project[] | null>(
    null
  );

  return (
    <section>
      <Container classes={`p-4 rounded-lg`}>
        <div className={`w-fit h-fit text-center max-w-screen-sm mx-auto`}>
          <h2>Portfolio</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Dignissimos placeat praesentium fugit, doloribus repudiandae
            perspiciatis dolorem ea reiciendis sed non! Provident est mollitia
            tenetur doloremque molestiae eius! Omnis libero ratione recusandae
            commodi voluptates. Quo reiciendis quisquam ex nostrum facere beatae
            quaerat labore in quis atque, incidunt esse voluptatibus deserunt
            aut!
          </p>
        </div>
        <FilterPanel setFilteredProjects={setFilteredProjects} />
        <div
          className={`w-full h-fit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8`}>
          {filteredProjects?.map((projectObj, index) => {
            return (
              <ProjectCard
                image={`https://picsum.photos/200/300`}
                desc={projectObj.desc}
                heading={projectObj.name}
                link={projectObj.link}
                key={index}
              />
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default SectionFour;
