document.addEventListener("DOMContentLoaded", () => {
    const teamList = document.getElementById("team-list");

    // Data for team members
    const teamMembers = [
        {
            name: "Ayush Walzade",
            age: 30,
            id: "2001",
            email: "ayush@gmail.com",
            mobile: "9876543210",
            photo: "person1.jpg" // Replace with actual image path
        },
        {
            name: "Kunal Deharkar",
            age: 28,
            id: "2002",
            email: "kunal@gmail.com",
            mobile: "8765432109",
            photo: "person2.jpg" // Replace with actual image path
        },
        {
            name: "Sumit Kotme",
            age: 25,
            id: "2003",
            email: "sumit@gmail.com",
            mobile: "9123456789",
            photo: "person3.jpg" // Replace with actual image path
        },
        {
            name: "Jay Singh",
            age: 35,
            id: "2004",
            email: "jay@gmail.com",
            mobile: "9234567890",
            photo: "person4.jpg" // Replace with actual image path
        },
        {
            name: "Raj Malhotra",
            age: 29,
            id: "2005",
            email: "raj@gmail.com",
            mobile: "9345678901",
            photo: "raj_malhotra.jpg" // Replace with actual image path
        }
    ];

    // Dynamically add team members to the page
    teamMembers.forEach(member => {
        const memberDiv = document.createElement("div");
        memberDiv.className = "team-member";
        
        memberDiv.innerHTML = `
            <a href="details.html?memberId=${member.id}" style="text-decoration: none; color: inherit;">
                <img src="${'person.jpeg'}" alt="${member.name}" class="profile-photo">
                <div class="team-details">
                    <p><span>Name:</span> ${member.name}</p>
                    <p><span>Age:</span> ${member.age}</p>
                    <p><span>ID:</span> ${member.id}</p>
                    <p><span>Email:</span> ${member.email}</p>
                    <p><span>Mobile No:</span> ${member.mobile}</p>
                </div>
            </a>
        `;
        
        teamList.appendChild(memberDiv);
    });
});