function handler(req, res) {
    //request object contains data about incoming request
    if (req.method === 'POST') {
        const data = req.body;

        const {title, description} = data;
    }

    // response object will be needed to send back response
}

export default handler;