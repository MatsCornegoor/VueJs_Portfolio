import axios from "axios"
export default new class {
    
    getProjects(){
        return axios.get("http://admin.matscornegoor.nl/mats/items/projects?fields=id,name,description,image.data,slug,position")
            .then(response => {

                let outputData = [];

                for( let i = 0; i < response.data.data.length; i++){
                    let imageData = null;
                    if( response.data.data[i].image !== null ){
                        imageData = response.data.data[i].image.data.full_url;
                    }

                    outputData.push({
                        id: response.data.data[i].id,
                        slug: response.data.data[i].slug,
                        name: response.data.data[i].name,
                        position: response.data.data[i].position,
                        description: response.data.data[i].description,
                        image: imageData
                    })
                }

                return outputData;

            }) 
    }

    getProject(slug){
        return axios.get("http://admin.matscornegoor.nl/mats/items/projects?fields=id,name,description,image.data,images.directus_files_id,slug")
            .then(response => {
                
                // return element when project.slug is true to slug
                let filteredData = response.data.data.find(function(project) {
                    if (project.slug == slug)
                        return true;
                });

                let outputData = [];
                let imagesData = [];

                if( filteredData.images !== null ){
                    for( let i = 0; i < filteredData.images.length; i++){
                        axios.get("http://admin.matscornegoor.nl/mats/files/" + filteredData.images[i].directus_files_id)
                            .then(response => {
                                imagesData.push(response.data.data.data.full_url);
                            }) 
                    }
                }

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
                    images: imagesData
                }
                
                return outputData;
            }) 
    }


    // getMedia(id){
    //     return axios.get("http://admin.matscornegoor.nl/mats/files/" + id)
    //         .then(response => {
    //             return response.data
    //         }) 
    // }

}

// http://admin.matscornegoor.nl/mats/items/projects/?fields=image.data
// http://admin.matscornegoor.nl/mats/items/projects?fields=id,name,description,image.data

// http://admin.matscornegoor.nl/mats/items/projects?fields=id,name,description,image.data,images.directus_files_id

