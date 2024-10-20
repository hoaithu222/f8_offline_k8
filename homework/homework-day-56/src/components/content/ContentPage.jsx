import React from "react";
import SocialPage from "./social/SocialPage";
import ProjectPage from "./project/ProjectPage";
import HobbiesPage from "./hobbies/HobbiesPage";

export default function ContentPage() {
  return (
    <div>
      <SocialPage />
      <ProjectPage />
      <HobbiesPage />
    </div>
  );
}
