import supabase from '../config/supabase.js';

export const registerUsers = async (req, res) => {
    const { username, email, password } = req.body;

    const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
            data: { username }
        }
    });

    if (error) {
        return res.status(400).json({ error: error.message });
    }

    return res.status(200).json({ success:true });
};