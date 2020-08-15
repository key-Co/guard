import { config } from 'dotenv';
import { PresenceData } from 'discord.js';

config();

export const token = process.env.TOKEN;
export const prefix = '$';

export const presence: PresenceData = {
    activity: {
        type: 'PLAYING',
        name: `Prefix: ${prefix}`
    }
};