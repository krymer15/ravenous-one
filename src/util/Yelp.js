const apiKey = 'Thlz99b83iuT-vOpAV4TZPw5yT6DUg20DQgBL0Ea6dJcnQyHiBdy2mLPs56jzemY3KsSBuU49OjOK92U08B5SGb2fCJSqVclTKQ9YtUDHwaePEe8lmr2sAHg1rISXXYx';

const Yelp = {
    search(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
        { headers: { Authorization: `Bearer ${apiKey}` } }).then((response) => {
            return response.json();
        })
        .then((jsonResponse) => {
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => {
                    console.log(business)
                    return {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories,
                        rating: business.rating,
                        reviewCount: business.review_count 
                    }
                })
            } else {

            }
        });
    }
}

export default Yelp;