import axios from "axios"

export default new class {
    
    getProjects(){
        return axios.get("http://admin.matscornegoor.nl/mats/items/projects?fields=id,name,description,image.data")
            .then(response => {
                return response.data
            }) 
    }

    getProject(id){
        return axios.get("http://admin.matscornegoor.nl/mats/items/projects/" + id)
            .then(response => {
                return response.data
            }) 
    }

    getProjectMedia(id){
        return axios.get("http://admin.matscornegoor.nl/mats/files/" + id)
            .then(response => {
                return response.data
            }) 
    }

}

// http://admin.matscornegoor.nl/mats/items/projects/?fields=image.data
// http://admin.matscornegoor.nl/mats/items/projects?fields=id,name,description,image.data