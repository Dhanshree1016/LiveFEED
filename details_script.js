document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const memberId = urlParams.get("memberId");

    const teamMembers = [
        {
            name: "Ayush Walzade",
            age: 30,
            id: "2001",
            email: "ayush@gmail.com",
            mobile: "9876543210",
            photo: "profile-placeholder.png",
            position: "Soldier",
            height: "5'10\"",
            weight: "70kg",
            gps: "Latitude: 45.4215, Longitude: -75.6972",
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
            email: "kunal@gmail.com",
            mobile: "8765432109",
            photo: "profile-placeholder.png",
            position: "Soldier",
            height: "5'6\"",
            weight: "60kg",
            gps: "Latitude: 45.5285, Longitude: -75.6912",
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
            gps: "Latitude: 45.4000, Longitude: -75.7000",
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
            gps: "Latitude: 45.4300, Longitude: -75.7100",
            heartRate: "68 bpm",
            bodyTemperature: "98.9°F",
            accelerometer: "Still",
            objectDetection: "No objects detected",
            pressureSensor: "1011 hPa"
        },
        {
            name: "Raj Malhotra",
            age: 29,
            id: "2005",
            email: "raj@gmail.com",
            mobile: "9654321098",
            photo: "raj_malhotra.jpg",
            position: "Soldier",
            height: "5'8\"",
            weight: "72kg",
            gps: "Latitude: 45.4500, Longitude: -75.7200",
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
