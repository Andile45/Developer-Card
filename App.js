const body = document.body;

// Main content container
const mainContent = document.createElement("main");
mainContent.id = "mainContent";
body.appendChild(mainContent);

// Card
const card = document.createElement("div");
card.id = "card";
mainContent.appendChild(card);

// Profile image
const image = document.createElement("img");
image.id = "profile";
image.src = "https://api.dicebear.com/9.x/adventurer/svg?seed=Alexander";
image.alt = "Programmer Profile";
card.appendChild(image);

// Username
const userName = document.createElement("h1");
userName.id = "userName";
userName.textContent = "codeNinja";
card.appendChild(userName);

// Email
const email = document.createElement("p");
email.id = "email";
email.textContent = "Email: ninja@example.com";
card.appendChild(email);

// Phone
const phone = document.createElement("p");
phone.id = "phone";
phone.textContent = "Phone: 123-456-7889";
card.appendChild(phone);

// Years of Experience
const yearsOldExp = document.createElement("p");
yearsOldExp.id = "yearsOfExp";
yearsOldExp.textContent = "Years of Experience: 5";
card.appendChild(yearsOldExp);

// Bio
const bioHeading = document.createElement("h2");
bioHeading.id = "bioHeading";
bioHeading.textContent = "Bio";
card.appendChild(bioHeading);

const bioContent = document.createElement("p");
bioContent.id = "bioContent";
bioContent.textContent =
  "A full-stack specialist with 5.5 years of experience, codeNinja excels at building modern, responsive web applications using JavaScript, React, and Node.js.";
card.appendChild(bioContent);

// Skills
const skillsHeading = document.createElement("h2");
skillsHeading.id = "skillsHeading";
skillsHeading.textContent = "Skills";
card.appendChild(skillsHeading);

const skillsList = document.createElement("ul");
skillsList.id = "skillsList";

["JavaScript", "React", "Node.js"].forEach(skill => {
  const li = document.createElement("li");
  li.textContent = skill;
  skillsList.appendChild(li);
});

card.appendChild(skillsList);
