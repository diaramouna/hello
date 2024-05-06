function Team({name, title}){
    if (title > 10) {
        return (<p className="alert alert success">Votre equipe est {name} et {title} titre</p> )
    }
    else if(title < 10){
        return (<p className="alert alert warning">Votre equipe est {name} et {title} titre</p> )
    }
    else if(title == 0){
        return (<p className="alert alert danger">Votre equipe est {name} et {title} titre</p> )
    }
    
}
export default Team;