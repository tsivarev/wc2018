class RadarService {
    checkTime(i) {
        return (i < 10) ? "0" + i : i;
    }

    async getLiveEvents() {
        var today = new Date();
        var h = this.checkTime(today.getHours());
        var m = this.checkTime(today.getMinutes());
        var s = this.checkTime(today.getSeconds());

        return [
            {
                'id': 1,
                'time': h + ':' + m + ':' + s,
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
                'group': 'C',
                'table': [
                    {
                        'place': 1,
                        'team': 'Россия',
                        'score': 3,
                        'games': 1,
                    },
                    {
                        'place': 2,
                        'team': 'Египет',
                        'score': 3,
                        'games': 1,
                    },
                    {
                        'place': 3,
                        'team': 'Уругвай',
                        'score': 0,
                        'games': 1,
                    },
                    {
                        'place': 4,
                        'team': 'Саудовская Аравия',
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
                        'score': 3,
                        'games': 1,
                    },
                    {
                        'place': 2,
                        'team': 'Египет',
                        'score': 3,
                        'games': 1,
                    },
                    {
                        'place': 3,
                        'team': 'Уругвай',
                        'score': 0,
                        'games': 1,
                    },
                    {
                        'place': 4,
                        'team': 'Саудовская Аравия',
                        'score': 0,
                        'games': 1,
                    },
                ]
            }
        ];
    }
}

export default new RadarService();