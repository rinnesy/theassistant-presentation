function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }
    
    // Status
    if (input == "are you online?") {
        if (assistantStatus == true) {
            return "yes, I am!";
        } else {
            return "no, but i'll be back later!";
        }
    }

    // Functionality
    if (input == "what do you do?") {
        return "i track schedules, agendas, and answer questions!"
    } else if (input == "how can you help me?") {
        return "i can track schedules, agendas, and answer questions!"
    } else if (input == "how can you help?") {
        return "i can track schedules, agendas, and answer questions!"
    }

    // Simple responses
    if (input == "hey") {
        return "how are you?";
    } else if (input == "hello") {
        return "how are you?"
    } else if (input == "goodbye") {
        return "talk to you later!";
    } else {
        return "try asking something else!";
        
    }
}