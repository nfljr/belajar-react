function checkSkill(){
    let skills = ["HTML", "CSS", "Javascript", "React", "NodeJs"];
    let input = document.getElementById("skillInput").value;
    let found = false;

    for (let i = 0; i < skills.length; i++){
        if (input.toLowerCase() === skills[i].toLowerCase()) {
            found = true;
        }
    }

    let message = "";

    if (found) {
        message = "Skill ditemukan\n";
    } else {
        message = "Skill Belum Dipelajari\n";
    }

    let list = "";

    for (let i = 0; i < skills.length; i++){
        list += skills[i] + ", ";
    }

    document.getElementById("result").innerText = 
        message + "Skill list: " + list;
}
