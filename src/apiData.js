import axios from "axios"

export default new class {
    getProjects(){
        return axios.get("http://admin.matscornegoor.nl/mats/items/projects")
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

}