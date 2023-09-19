import { NextApiRequest, NextApiResponse } from "next"

interface CredentialExtendedNextApiRequest extends NextApiRequest{
    body: {
        credential: any,
        type: string
    }
}

export const POST = async (req: CredentialExtendedNextApiRequest, res: NextApiResponse) => {
    const { credential, type } = req.body
    
}