const addBtn = document.querySelector(".add-session");
const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");
const deleteBtn = document.querySelector(".delete");
const sessionCard = document.querySelector(".session-card");
const sessionForm = document.getElementById("sessionForm");

// OPEN MODAL
addBtn.onclick = () => {
    modal.style.display = "flex";
};

// CLOSE MODAL
closeModal.onclick = () => {
    modal.style.display = "none";
};

// DELETE SESSION CARD (existing one)
deleteBtn.onclick = () => {
    sessionCard.remove();
};

// ADD NEW SESSION
sessionForm.onsubmit = (e) => {
    e.preventDefault();

    // get form values
    const subject = document.getElementById("subject").value;
    const topic = document.getElementById("topic").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const duration = document.getElementById("duration").value;
    const priority = document.getElementById("priority").value;

    // convert date to readable format
    const dateObj = new Date(date);
    const options = { weekday: "short", month: "short", day: "numeric" };
    const formattedDate = dateObj.toLocaleDateString("en-US", options);

    // create new session card
    const newCard = document.createElement("div");
    newCard.className = "session-card";
    newCard.innerHTML = `
        <div>
            <div class="session-header">
                <span class="dot"></span>
                <h3 class="session-title">${subject}</h3>
                <span class="tag">${priority}</span>
            </div>

            <p class="topic">${topic}</p>

            <div class="session-details">
                <span>📆 ${formattedDate}</span>
                <span>⏰ ${time} • ${duration} hours</span>
            </div>
        </div>

        <span class="delete">🗑</span>
    `;

    // add delete function to new card
    newCard.querySelector(".delete").onclick = () => newCard.remove();

    // append card below existing ones
    document.querySelector(".wrapper").appendChild(newCard);

    // close modal
    modal.style.display = "none";

    // reset form
    sessionForm.reset();
};
