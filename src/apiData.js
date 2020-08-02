export default {
    getProjects(){
        return fetch("http://admin.matscornegoor.nl/mats/items/projects")
            .then(response => {
                return response.json();
            }) 
    },

    getProject(id){
        return fetch("http://admin.matscornegoor.nl/mats/items/projects/" + id)
            .then(response => {
                return response.json();
            }) 
    },

}