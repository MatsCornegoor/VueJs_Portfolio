import axios from "axios"


export default new class {
    
    getProjects(){
        return axios.get("http://admin.matscornegoor.nl/mats/items/projects?fields=id,name,description,image.data,images.directus_files_id,slug")
            .then(response => {

                var outputData = [];
                for( let i = 0; i < response.data.data.length; i++){
                    let imageData = null;
                    if( response.data.data[i].image !== null ){
                        imageData = response.data.data[i].image.data.full_url;
                    }

                    outputData[i] = {
                        id: response.data.data[i].id,
                        slug: response.data.data[i].slug,
                        name: response.data.data[i].name,
                        description: response.data.data[i].description,
                        image: imageData,
                        // images: imagesData
                    }
                }
                return outputData;

            }) 
    }

    getProject(slug){
        return axios.get("http://admin.matscornegoor.nl/mats/items/projects?fields=id,name,description,image.data,images.directus_files_id,slug")
            .then(response => {

                var filteredData = response.data.data.find(function(project) {
                    if (project.slug == slug)
                        return true;
                });

                var outputData = [];
                let imageData = null;
                if( filteredData.image !== null ){
                    imageData = filteredData.image.data.full_url;
                }

                outputData = {
                    id: filteredData.id,
                    slug: filteredData.slug,
                    name: filteredData.name,
                    description: filteredData.description,
                    image: imageData,
                }
                
                return outputData;

            }) 
    }

    // getProject(id){
    //     return axios.get("http://admin.matscornegoor.nl/mats/items/projects/" + id + "?fields=id,name,description,image.data,images.data")
    //         .then(response => {
    //             return response.data
    //         }) 
    // }

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

