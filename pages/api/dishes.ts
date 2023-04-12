import mockDishes from '@/libs/mockdishes';
import type { NextApiRequest, NextApiResponse } from 'next';


const dishes: (req:NextApiRequest, res: NextApiResponse) => Promise<void> = async (req, res) => {
    if (req.method === 'GET') {
      const { page } = req.query;
      if (page && !Array.isArray(page)) {
        const retDishes = parseInt(page) > 0 ? mockDishes(parseInt(page)) : [];
        if (Array.isArray(retDishes)) {
          return res.json({dishes: retDishes});
        } 
        else {
          return res.json({error: true});
        }
      }
    }
    return res.json({error: true});
};

export default dishes;