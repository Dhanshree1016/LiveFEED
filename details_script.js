document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const memberId = urlParams.get("memberId");

    const teamMembers = [
        {
            name: "Ayush Walzhade",
            age: 30,
            id: "2001",
            email: "ayush@gmail.com",
            mobile: "9876543210",
            photo: "profile-placeholder.png",
            position: "Soldier",
            height: "5'10\"",
            weight: "70kg",
            gps: <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3751.5708142483077!2d74.49227367468532!3d19.900336725578438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdc4474a245d261%3A0x806a6b9889186a80!2sSanjivani%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1737986118316!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>,
            heartRate: "72 bpm",
            bodyTemperature: "98.6°F",
            accelerometer: "Movement detected",
            objectDetection: "No objects detected",
            pressureSensor: "1013 hPa"
        },
        {
            name: "Kunal Deharkar",
            age: 28,
            id: "2002",
            email: "kunak@gmail.com",
            mobile: "8765432109",
            photo: "profile-placeholder.png",
            position: "Soldier",
            height: "5'6\"",
            weight: "60kg",
            gps: <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3751.5708142483077!2d74.49227367468532!3d19.900336725578438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdc4474a245d261%3A0x806a6b9889186a80!2sSanjivani%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1737986118316!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>,
            heartRate: "75 bpm",
            bodyTemperature: "99.0°F",
            accelerometer: "Still",
            objectDetection: "No objects detected",
            pressureSensor: "1010 hPa"
        },
        {
            name: "Sumit Kotme",
            age: 25,
            id: "2003",
            email: "sumit@gmail.com",
            mobile: "9123456789",
            photo: "profile-placeholder.png",
            position: "Commander",
            height: "6'0\"",
            weight: "80kg",
            gps: <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3751.5708142483077!2d74.49227367468532!3d19.900336725578438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdc4474a245d261%3A0x806a6b9889186a80!2sSanjivani%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1737986118316!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>,
            heartRate: "70 bpm",
            bodyTemperature: "98.7°F",
            accelerometer: "Movement detected",
            objectDetection: "No objects detected",
            pressureSensor: "1012 hPa"
        },
        {
            name: "Jay Singh",
            age: 35,
            id: "2004",
            email: "jay@gmail.com",
            mobile: "9876123456",
            photo: "profile-placeholder.png",
            position: "Technician",
            height: "5'7\"",
            weight: "65kg",
            gps: <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3751.5708142483077!2d74.49227367468532!3d19.900336725578438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdc4474a245d261%3A0x806a6b9889186a80!2sSanjivani%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1737986118316!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>,
            heartRate: "68 bpm",
            bodyTemperature: "98.9°F",
            accelerometer: "Still",
            objectDetection: "No objects detected",
            pressureSensor: "1011 hPa"
        },
        {
            name: "Raj Pawar",
            age: 29,
            id: "2005",
            email: "raj@gmail.com",
            mobile: "9654321098",
            photo: "profile-placeholder.png",
            position: "Soldier",
            height: "5'8\"",
            weight: "72kg",
            gps: <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3751.5708142483077!2d74.49227367468532!3d19.900336725578438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdc4474a245d261%3A0x806a6b9889186a80!2sSanjivani%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1737986118316!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>,
            heartRate: "80 bpm",
            bodyTemperature: "98.5°F",
            accelerometer: "Movement detected",
            objectDetection: "No objects detected",
            pressureSensor: "1015 hPa"
        }
    ];

    const member = teamMembers.find(member => member.id === memberId);

    if (member) {
        // Display member details
        document.getElementById("member-details").innerHTML = `
            <img src="${'person.jpg'}" alt="${member.name}" class="profile-photo">
            <h2>${member.name}</h2>
            <p><strong>Position:</strong> ${member.position}</p>
            <p><strong>ID:</strong> ${member.id}</p>
            <p><strong>Age:</strong> ${member.age}</p>
            <p><strong>Height:</strong> ${member.height}</p>
            <p><strong>Weight:</strong> ${member.weight}</p>
        `;

        // Fill in the other info boxes
        document.getElementById("gps-info").innerText = member.gps;
        document.getElementById("heart-rate-info").innerText = member.heartRate;
        document.getElementById("body-temperature-info").innerText = member.bodyTemperature;
        document.getElementById("accelerometer-info").innerText = member.accelerometer;
        document.getElementById("object-detection-info").innerText = member.objectDetection;
        document.getElementById("pressure-sensor-info").innerText = member.pressureSensor;
    } else {
        document.getElementById("member-details").innerHTML = "<p>Member not found.</p>";
    }
});
