class RadarService {
    async getLiveEvents() {
        return [
            {
                'id': 1,
                'time': '18:30',
                'team_a': 'Россия',
                'team_b': 'Германия',
                'status': '1:0',
            },
            {
                'id': 2,
                'time': '19:30',
                'team_a': 'Австрия',
                'team_b': 'США',
                'status': '0:0',
            },
            {
                'id': 3,
                'time': '20:30',
                'team_a': 'Италия',
                'team_b': 'Франция',
                'status': 'Не начался',
            },
            {
                'id': 4,
                'time': '20:30',
                'team_a': 'Египет',
                'team_b': 'ЮАР',
                'status': 'Не начался',
            }
        ];
    }

    async getGroups() {
        return [
            'A',
            'B',
            'C',
            'D',
        ]
    }

    async getGroupLeaderboards() {
        return [
            {
                'group': 'A',
                'table': [
                    {
                        'place': 1,
                        'team': 'Россия',
                        'teamId': 'russia',
                        'score': 3,
                        'games': 1,
                    },
                    {
                        'place': 2,
                        'team': 'Египет',
                        'teamId': 'russia',
                        'score': 3,
                        'games': 1,
                    },
                    {
                        'place': 3,
                        'team': 'Уругвай',
                        'teamId': 'russia',
                        'score': 0,
                        'games': 1,
                    },
                    {
                        'place': 4,
                        'team': 'Саудовская Аравия',
                        'teamId': 'russia',
                        'score': 0,
                        'games': 1,
                    },
                ]
            },
            {
                'group': 'B',
                'table': [
                    {
                        'place': 1,
                        'team': 'Россия',
                        'teamId': 'russia',
                        'score': 3,
                        'games': 1,
                    },
                    {
                        'place': 2,
                        'team': 'Египет',
                        'teamId': 'russia',
                        'score': 3,
                        'games': 1,
                    },
                    {
                        'place': 3,
                        'team': 'Уругвай',
                        'teamId': 'russia',
                        'score': 0,
                        'games': 1,
                    },
                    {
                        'place': 4,
                        'team': 'Саудовская Аравия',
                        'teamId': 'russia',
                        'score': 0,
                        'games': 1,
                    },
                ]
            }
        ];
    }

    async getTeams() {
        return [
            {
                'id': 'russia',
                'name': 'Россия',
                'group': 'A',
                'players': [
                    {
                        'first_name': 'Игорь',
                        'last_name': 'Акинфеев',
                        'number': 1,
                        'role': 'Вратарь',
                        'image': 'http://www.footballrussia.ru/uploads/posts/2016-02/1456418315_akinfeev.jpg'
                    },
                    {
                        'first_name': 'Игорь',
                        'last_name': 'Акинфеев',
                        'number': 1,
                        'role': 'Вратарь',
                        'image': 'http://www.footballrussia.ru/uploads/posts/2016-02/1456418315_akinfeev.jpg'
                    },
                    {
                        'first_name': 'Игорь',
                        'last_name': 'Акинфеев',
                        'number': 1,
                        'role': 'Вратарь',
                        'image': 'http://www.footballrussia.ru/uploads/posts/2016-02/1456418315_akinfeev.jpg'
                    }
                ]
            }
        ];
    }
}

export default new RadarService();