import File from '../models/File';
import Meetup from '../models/Meetup';
import { isBefore } from 'date-fns';

class MeetupController {
  async store(req, res) {
    const { title, description, location, date } = req.body;
 
    if (isBefore(date, new Date()))
    {
      return res.json
    }
 
    const { originalname, filename: path } = req.file;

    const file = await File.create({ name: originalname, path });

    const meetup = await Meetup.create({
      title,
      description,
      location,
      date,
      banner: file.id,
      user_id: req.userId,
    });

    return res.json(meetup);
  }
}

export default new MeetupController();
