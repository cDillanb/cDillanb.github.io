const aboutMeLink = document.getElementById("about-me");
const skillsLink = document.getElementById("skills");
const projectsLink = document.getElementById("projects");
const contactLink = document.getElementById("contact");

const link = (e) => {
    document.getElementById(`${e.target.id}-wrapper`).scrollIntoView({block: "start", inline: "nearest", behavior: "smooth"});
}

aboutMeLink.addEventListener("click", link);
skillsLink.addEventListener("click", link);
projectsLink.addEventListener("click", link);
contactLink.addEventListener("click", link);
