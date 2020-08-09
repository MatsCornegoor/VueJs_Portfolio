import axios from "axios"

export default new class {
    
    getProjects(){
        return axios.get("http://admin.matscornegoor.nl/mats/items/projects?fields=id,name,description,image.data,images.directus_files_id")
            .then(response => {
                // return response.data

                var outputData = [];
                for( let i = 0; i < response.data.data.length; i++){
                    let imageData = null;
                    if( response.data.data[i].image !== null ){
                        imageData = response.data.data[i].image.data.full_url;
                    }

                    outputData[i] = {
                        id: response.data.data[i].id,
                        name: response.data.data[i].name,
                        image: imageData,
                        // images: imagesData
                    }
                }
                return outputData;

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

