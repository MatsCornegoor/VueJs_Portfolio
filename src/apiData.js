import axios from "axios"

export default new class {
    
    getProjects(){
        return axios.get("http://admin.matscornegoor.nl/mats/items/projects?fields=id,name,description,image.data,images.data")
            .then(response => {
                return response.data
            }) 
    }

    getProject(id){
        return axios.get("http://admin.matscornegoor.nl/mats/items/projects/" + id + "?fields=id,name,description,image.data,images.data")
            .then(response => {
                return response.data
            }) 
    }

    getMedia(id){
        return axios.get("http://admin.matscornegoor.nl/mats/files/" + id)
            .then(response => {
                return response.data
            }) 
    }

}

// http://admin.matscornegoor.nl/mats/items/projects/?fields=image.data
// http://admin.matscornegoor.nl/mats/items/projects?fields=id,name,description,image.data

// http://admin.matscornegoor.nl/mats/items/projects?fields=id,name,description,image.data,images.directus_files_id

