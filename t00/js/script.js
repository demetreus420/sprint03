function newTeam(title, leader, members, agenda = '', isEvil = false) {
    return {
        title: title,
        leader: leader,
        members: members.trim()
                .split(' ')
                .filter(word => word != '')
                .join(' ')
                .split(',')
                .map(word => word.trim())
                .filter(word => word != ''),
        memberCount: members.trim()
                .split(' ')
                .filter(word => word != '')
                .join(' ').split(',')
                .map(word => word.trim())
                .filter(word => word != '')
                .length,
        agenda: agenda,
        isEvil: Boolean(isEvil),
    };
}

let team = newTeam(prompt('Enter title/name of your team:')
    ,prompt('Enter the name of leader:')
    ,prompt('Enter names of members and split them by coma:')
    ,prompt('Enter some info about this team:')
    ,prompt('Enter some text to make this team evil or don\'t to make this good:'));

alert(`Here\'s the team:
name - ${team.title}
leader - ${team.leader}
members - ${team.members.join(', ')}
memeberCount - ${team.memberCount}
agenda - ${team.agenda}
isEvil - ${team.isEvil}`);
