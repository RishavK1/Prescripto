
// API for adding doctor


export const addDoctor = async () => {

    try {
            const {
              name,
              email,
              password,
              image,
              speciality,
              degree,
              experience,
              about,
              fees,
              address,
        } = req.body;
        

        const imageFile = req.file;

        console.log({
          name,
          email,
          password,
          image,
          speciality,
          degree,
          experience,
          about,
          fees,
          address,
        }, imageFile);

    } catch (error) {
        
    }
}