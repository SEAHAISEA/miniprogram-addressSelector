const provinces = [
    {
        id: '110000',
        name: '北京',
        fullname: '北京市',
        pinyin: ['bei', 'jing'],
        linkage: ''
    },
    {
        id: '120000',
        name: '天津',
        fullname: '天津市',
        pinyin: ['tian', 'jin'],
        linkage: ''
    },
    {
        id: '130000',
        name: '河北',
        fullname: '河北省',
        pinyin: ['he', 'bei'],
        linkage: 0
    },
    {
        id: '140000',
        name: '山西',
        fullname: '山西省',
        pinyin: ['shan', 'xi'],
        linkage: 1
    },
    {
        id: '150000',
        name: '内蒙古',
        fullname: '内蒙古自治区',
        pinyin: ['nei', 'meng', 'gu'],
        linkage: 2
    },
    {
        id: '210000',
        name: '辽宁',
        fullname: '辽宁省',
        pinyin: ['liao', 'ning'],
        linkage: 3
    },
    {
        id: '220000',
        name: '吉林',
        fullname: '吉林省',
        pinyin: ['ji', 'lin'],
        linkage: 4
    },
    {
        id: '230000',
        name: '黑龙江',
        fullname: '黑龙江省',
        pinyin: ['hei', 'long', 'jiang'],
        linkage: 5
    },
    {
        id: '310000',
        name: '上海',
        fullname: '上海市',
        pinyin: ['shang', 'hai'],
        linkage: ''
    },
    {
        id: '320000',
        name: '江苏',
        fullname: '江苏省',
        pinyin: ['jiang', 'su'],
        linkage: 6
    },
    {
        id: '330000',
        name: '浙江',
        fullname: '浙江省',
        pinyin: ['zhe', 'jiang'],
        linkage: 7
    },
    {
        id: '340000',
        name: '安徽',
        fullname: '安徽省',
        pinyin: ['an', 'hui'],
        linkage: 8
    },
    {
        id: '350000',
        name: '福建',
        fullname: '福建省',
        pinyin: ['fu', 'jian'],
        linkage: 9
    },
    {
        id: '360000',
        name: '江西',
        fullname: '江西省',
        pinyin: ['jiang', 'xi'],
        linkage: 10
    },
    {
        id: '370000',
        name: '山东',
        fullname: '山东省',
        pinyin: ['shan', 'dong'],
        linkage: 11
    },
    {
        id: '410000',
        name: '河南',
        fullname: '河南省',
        pinyin: ['he', 'nan'],
        linkage: 12
    },
    {
        id: '420000',
        name: '湖北',
        fullname: '湖北省',
        pinyin: ['hu', 'bei'],
        linkage: 13
    },
    {
        id: '430000',
        name: '湖南',
        fullname: '湖南省',
        pinyin: ['hu', 'nan'],
        linkage: 14
    },
    {
        id: '440000',
        name: '广东',
        fullname: '广东省',
        pinyin: ['guang', 'dong'],
        linkage: 15
    },
    {
        id: '450000',
        name: '广西',
        fullname: '广西壮族自治区',
        pinyin: ['guang', 'xi'],
        linkage: 16
    },
    {
        id: '460000',
        name: '海南',
        fullname: '海南省',
        pinyin: ['hai', 'nan'],
        linkage: 17
    },
    {
        id: '500000',
        name: '重庆',
        fullname: '重庆市',
        pinyin: ['chong', 'qing'],
        linkage: ''
    },
    {
        id: '510000',
        name: '四川',
        fullname: '四川省',
        pinyin: ['si', 'chuan'],
        linkage: 18
    },
    {
        id: '520000',
        name: '贵州',
        fullname: '贵州省',
        pinyin: ['gui', 'zhou'],
        linkage: 19
    },
    {
        id: '530000',
        name: '云南',
        fullname: '云南省',
        pinyin: ['yun', 'nan'],
        linkage: 20
    },
    {
        id: '540000',
        name: '西藏',
        fullname: '西藏自治区',
        pinyin: ['xi', 'zang'],
        linkage: 21
    },
    {
        id: '610000',
        name: '陕西',
        fullname: '陕西省',
        pinyin: ['shan', 'xi'],
        linkage: 22
    },
    {
        id: '620000',
        name: '甘肃',
        fullname: '甘肃省',
        pinyin: ['gan', 'su'],
        linkage: 23
    },
    {
        id: '630000',
        name: '青海',
        fullname: '青海省',
        pinyin: ['qing', 'hai'],
        linkage: 24
    },
    {
        id: '640000',
        name: '宁夏',
        fullname: '宁夏回族自治区',
        pinyin: ['ning', 'xia'],
        linkage: 25
    },
    {
        id: '650000',
        name: '新疆',
        fullname: '新疆维吾尔自治区',
        pinyin: ['xin', 'jiang'],
        linkage: 26
    },
    {
        id: '710000',
        name: '台湾',
        fullname: '台湾省',
        pinyin: ['tai', 'wan'],
        linkage: 27
    },
    {
        id: '810000',
        name: '香港',
        fullname: '香港特别行政区',
        pinyin: ['xiang', 'gang'],
        linkage: ''
    },
    {
        id: '820000',
        name: '澳门',
        fullname: '澳门特别行政区',
        pinyin: ['ao', 'men'],
        linkage: ''
    }
];
const city = [
    [
        {
            id: '110000',
            name: '北京',
            fullname: '北京市',
            pinyin: ['bei', 'jing']
        },
        {
            id: '110101',
            name: '东城',
            fullname: '东城区',
            pinyin: ['dong', 'cheng']
        },
        {
            id: '110102',
            name: '西城',
            fullname: '西城区',
            pinyin: ['xi', 'cheng']
        },
        {
            id: '110105',
            name: '朝阳',
            fullname: '朝阳区',
            pinyin: ['chao', 'yang']
        },
        {
            id: '110106',
            name: '丰台',
            fullname: '丰台区',
            pinyin: ['feng', 'tai']
        },
        {
            id: '110107',
            name: '石景山',
            fullname: '石景山区',
            pinyin: ['shi', 'jing', 'shan']
        },
        {
            id: '110108',
            name: '海淀',
            fullname: '海淀区',
            pinyin: ['hai', 'dian']
        },
        {
            id: '110109',
            name: '门头沟',
            fullname: '门头沟区',
            pinyin: ['men', 'tou', 'gou']
        },
        {
            id: '110111',
            name: '房山',
            fullname: '房山区',
            pinyin: ['fang', 'shan']
        },
        {
            id: '110112',
            name: '通州',
            fullname: '通州区',
            pinyin: ['tong', 'zhou']
        },
        {
            id: '110113',
            name: '顺义',
            fullname: '顺义区',
            pinyin: ['shun', 'yi']
        },
        {
            id: '110114',
            name: '昌平',
            fullname: '昌平区',
            pinyin: ['chang', 'ping']
        },
        {
            id: '110115',
            name: '大兴',
            fullname: '大兴区',
            pinyin: ['da', 'xing']
        },
        {
            id: '110116',
            name: '怀柔',
            fullname: '怀柔区',
            pinyin: ['huai', 'rou']
        },
        {
            id: '110117',
            name: '平谷',
            fullname: '平谷区',
            pinyin: ['ping', 'gu']
        },
        {
            id: '110118',
            name: '密云',
            fullname: '密云区',
            pinyin: ['mi', 'yun']
        },
        {
            id: '110119',
            name: '延庆',
            fullname: '延庆区',
            pinyin: ['yan', 'qing']
        }
    ],
    //------------------------------------------------------------------------------------

    [
        {
            id: '120000',
            name: '天津',
            fullname: '天津市',
            pinyin: ['tian', 'jin']
        },
        {
            id: '120101',
            name: '和平',
            fullname: '和平区',
            pinyin: ['he', 'ping']
        },
        {
            id: '120102',
            name: '河东',
            fullname: '河东区',
            pinyin: ['he', 'dong']
        },
        {
            id: '120103',
            name: '河西',
            fullname: '河西区',
            pinyin: ['he', 'xi']
        },
        {
            id: '120104',
            name: '南开',
            fullname: '南开区',
            pinyin: ['nan', 'kai']
        },
        {
            id: '120105',
            name: '河北',
            fullname: '河北区',
            pinyin: ['he', 'bei']
        },
        {
            id: '120106',
            name: '红桥',
            fullname: '红桥区',
            pinyin: ['hong', 'qiao']
        },
        {
            id: '120110',
            name: '东丽',
            fullname: '东丽区',
            pinyin: ['dong', 'li']
        },
        {
            id: '120111',
            name: '西青',
            fullname: '西青区',
            pinyin: ['xi', 'qing']
        },
        {
            id: '120112',
            name: '津南',
            fullname: '津南区',
            pinyin: ['jin', 'nan']
        },
        {
            id: '120113',
            name: '北辰',
            fullname: '北辰区',
            pinyin: ['bei', 'chen']
        },
        {
            id: '120114',
            name: '武清',
            fullname: '武清区',
            pinyin: ['wu', 'qing']
        },
        {
            id: '120115',
            name: '宝坻',
            fullname: '宝坻区',
            pinyin: ['bao', 'di']
        },
        {
            id: '120116',
            name: '滨海',
            fullname: '滨海新区',
            pinyin: ['bin', 'hai']
        },
        {
            id: '120117',
            name: '宁河',
            fullname: '宁河区',
            pinyin: ['ning', 'he']
        },
        {
            id: '120118',
            name: '静海',
            fullname: '静海区',
            pinyin: ['jing', 'hai']
        },
        {
            id: '120119',
            name: '蓟州',
            fullname: '蓟州区',
            pinyin: ['ji', 'zhou']
        }
    ],
    //------------------------------------------------------------------------------------

    [
        {
            id: '130100',
            name: '石家庄',
            fullname: '石家庄市',
            pinyin: ['shi', 'jia', 'zhuang']
        },
        {
            id: '130200',
            name: '唐山',
            fullname: '唐山市',
            pinyin: ['tang', 'shan']
        },
        {
            id: '130300',
            name: '秦皇岛',
            fullname: '秦皇岛市',
            pinyin: ['qin', 'huang', 'dao']
        },
        {
            id: '130400',
            name: '邯郸',
            fullname: '邯郸市',
            pinyin: ['han', 'dan']
        },
        {
            id: '130500',
            name: '邢台',
            fullname: '邢台市',
            pinyin: ['xing', 'tai']
        },
        {
            id: '130600',
            name: '保定',
            fullname: '保定市',
            pinyin: ['bao', 'ding']
        },
        {
            id: '130700',
            name: '张家口',
            fullname: '张家口市',
            pinyin: ['zhang', 'jia', 'kou']
        },
        {
            id: '130800',
            name: '承德',
            fullname: '承德市',
            pinyin: ['cheng', 'de']
        },
        {
            id: '130900',
            name: '沧州',
            fullname: '沧州市',
            pinyin: ['cang', 'zhou']
        },
        {
            id: '131000',
            name: '廊坊',
            fullname: '廊坊市',
            pinyin: ['lang', 'fang']
        },
        {
            id: '131100',
            name: '衡水',
            fullname: '衡水市',
            pinyin: ['heng', 'shui']
        }
    ],
    //------------------------------------------------------------------------------------

    [
        {
            id: '140100',
            name: '太原',
            fullname: '太原市',
            pinyin: ['tai', 'yuan']
        },
        {
            id: '140200',
            name: '大同',
            fullname: '大同市',
            pinyin: ['da', 'tong']
        },
        {
            id: '140300',
            name: '阳泉',
            fullname: '阳泉市',
            pinyin: ['yang', 'quan']
        },
        {
            id: '140400',
            name: '长治',
            fullname: '长治市',
            pinyin: ['chang', 'zhi']
        },
        {
            id: '140500',
            name: '晋城',
            fullname: '晋城市',
            pinyin: ['jin', 'cheng']
        },
        {
            id: '140600',
            name: '朔州',
            fullname: '朔州市',
            pinyin: ['shuo', 'zhou']
        },
        {
            id: '140700',
            name: '晋中',
            fullname: '晋中市',
            pinyin: ['jin', 'zhong']
        },
        {
            id: '140800',
            name: '运城',
            fullname: '运城市',
            pinyin: ['yun', 'cheng']
        },
        {
            id: '140900',
            name: '忻州',
            fullname: '忻州市',
            pinyin: ['xin', 'zhou']
        },
        {
            id: '141000',
            name: '临汾',
            fullname: '临汾市',
            pinyin: ['lin', 'fen']
        },
        {
            id: '141100',
            name: '吕梁',
            fullname: '吕梁市',
            pinyin: ['lv', 'liang']
        }
    ],
    //------------------------------------------------------------------------------------

    [
        {
            id: '150100',
            name: '呼和浩特',
            fullname: '呼和浩特市',
            pinyin: ['hu', 'he', 'hao', 'te']
        },
        {
            id: '150200',
            name: '包头',
            fullname: '包头市',
            pinyin: ['bao', 'tou']
        },
        {
            id: '150300',
            name: '乌海',
            fullname: '乌海市',
            pinyin: ['wu', 'hai']
        },
        {
            id: '150400',
            name: '赤峰',
            fullname: '赤峰市',
            pinyin: ['chi', 'feng']
        },
        {
            id: '150500',
            name: '通辽',
            fullname: '通辽市',
            pinyin: ['tong', 'liao']
        },
        {
            id: '150600',
            name: '鄂尔多斯',
            fullname: '鄂尔多斯市',
            pinyin: ['e', 'er', 'duo', 'si']
        },
        {
            id: '150700',
            name: '呼伦贝尔',
            fullname: '呼伦贝尔市',
            pinyin: ['hu', 'lun', 'bei', 'er']
        },
        {
            id: '150800',
            name: '巴彦淖尔',
            fullname: '巴彦淖尔市',
            pinyin: ['ba', 'yan', 'nao', 'er']
        },
        {
            id: '150900',
            name: '乌兰察布',
            fullname: '乌兰察布市',
            pinyin: ['wu', 'lan', 'cha', 'bu']
        },
        {
            id: '152200',
            name: '兴安',
            fullname: '兴安盟',
            pinyin: ['xing', 'an']
        },
        {
            id: '152500',
            name: '锡林郭勒',
            fullname: '锡林郭勒盟',
            pinyin: ['xi', 'lin', 'guo', 'le']
        },
        {
            id: '152900',
            name: '阿拉善',
            fullname: '阿拉善盟',
            pinyin: ['a', 'la', 'shan']
        }
    ],
    //------------------------------------------------------------------------------------

    [
        {
            id: '210100',
            name: '沈阳',
            fullname: '沈阳市',
            pinyin: ['shen', 'yang']
        },
        {
            id: '210200',
            name: '大连',
            fullname: '大连市',
            pinyin: ['da', 'lian']
        },
        {
            id: '210300',
            name: '鞍山',
            fullname: '鞍山市',
            pinyin: ['an', 'shan']
        },
        {
            id: '210400',
            name: '抚顺',
            fullname: '抚顺市',
            pinyin: ['fu', 'shun']
        },
        {
            id: '210500',
            name: '本溪',
            fullname: '本溪市',
            pinyin: ['ben', 'xi']
        },
        {
            id: '210600',
            name: '丹东',
            fullname: '丹东市',
            pinyin: ['dan', 'dong']
        },
        {
            id: '210700',
            name: '锦州',
            fullname: '锦州市',
            pinyin: ['jin', 'zhou']
        },
        {
            id: '210800',
            name: '营口',
            fullname: '营口市',
            pinyin: ['ying', 'kou']
        },
        {
            id: '210900',
            name: '阜新',
            fullname: '阜新市',
            pinyin: ['fu', 'xin']
        },
        {
            id: '211000',
            name: '辽阳',
            fullname: '辽阳市',
            pinyin: ['liao', 'yang']
        },
        {
            id: '211100',
            name: '盘锦',
            fullname: '盘锦市',
            pinyin: ['pan', 'jin']
        },
        {
            id: '211200',
            name: '铁岭',
            fullname: '铁岭市',
            pinyin: ['tie', 'ling']
        },
        {
            id: '211300',
            name: '朝阳',
            fullname: '朝阳市',
            pinyin: ['chao', 'yang']
        },
        {
            id: '211400',
            name: '葫芦岛',
            fullname: '葫芦岛市',
            pinyin: ['hu', 'lu', 'dao']
        }
    ],
    //------------------------------------------------------------------------------------

    [
        {
            id: '220100',
            name: '长春',
            fullname: '长春市',
            pinyin: ['chang', 'chun']
        },
        {
            id: '220200',
            name: '吉林',
            fullname: '吉林市',
            pinyin: ['ji', 'lin']
        },
        {
            id: '220300',
            name: '四平',
            fullname: '四平市',
            pinyin: ['si', 'ping']
        },
        {
            id: '220400',
            name: '辽源',
            fullname: '辽源市',
            pinyin: ['liao', 'yuan']
        },
        {
            id: '220500',
            name: '通化',
            fullname: '通化市',
            pinyin: ['tong', 'hua']
        },
        {
            id: '220600',
            name: '白山',
            fullname: '白山市',
            pinyin: ['bai', 'shan']
        },
        {
            id: '220700',
            name: '松原',
            fullname: '松原市',
            pinyin: ['song', 'yuan']
        },
        {
            id: '220800',
            name: '白城',
            fullname: '白城市',
            pinyin: ['bai', 'cheng']
        },
        {
            id: '222400',
            name: '延边',
            fullname: '延边朝鲜族自治州',
            pinyin: ['yan', 'bian']
        }
    ],
    //------------------------------------------------------------------------------------

    [
        {
            id: '230100',
            name: '哈尔滨',
            fullname: '哈尔滨市',
            pinyin: ['ha', 'er', 'bin']
        },
        {
            id: '230200',
            name: '齐齐哈尔',
            fullname: '齐齐哈尔市',
            pinyin: ['qi', 'qi', 'ha', 'er']
        },
        {
            id: '230300',
            name: '鸡西',
            fullname: '鸡西市',
            pinyin: ['ji', 'xi']
        },
        {
            id: '230400',
            name: '鹤岗',
            fullname: '鹤岗市',
            pinyin: ['he', 'gang']
        },
        {
            id: '230500',
            name: '双鸭山',
            fullname: '双鸭山市',
            pinyin: ['shuang', 'ya', 'shan']
        },
        {
            id: '230600',
            name: '大庆',
            fullname: '大庆市',
            pinyin: ['da', 'qing']
        },
        {
            id: '230700',
            name: '伊春',
            fullname: '伊春市',
            pinyin: ['yi', 'chun']
        },
        {
            id: '230800',
            name: '佳木斯',
            fullname: '佳木斯市',
            pinyin: ['jia', 'mu', 'si']
        },
        {
            id: '230900',
            name: '七台河',
            fullname: '七台河市',
            pinyin: ['qi', 'tai', 'he']
        },
        {
            id: '231000',
            name: '牡丹江',
            fullname: '牡丹江市',
            pinyin: ['mu', 'dan', 'jiang']
        },
        {
            id: '231100',
            name: '黑河',
            fullname: '黑河市',
            pinyin: ['hei', 'he']
        },
        {
            id: '231200',
            name: '绥化',
            fullname: '绥化市',
            pinyin: ['sui', 'hua']
        },
        {
            id: '232700',
            name: '大兴安岭',
            fullname: '大兴安岭地区',
            pinyin: ['da', 'xing', 'an', 'ling']
        }
    ],
    //------------------------------------------------------------------------------------

    [
        {
            id: '310101',
            name: '黄浦',
            fullname: '黄浦区',
            pinyin: ['huang', 'pu']
        },
        {
            id: '310104',
            name: '徐汇',
            fullname: '徐汇区',
            pinyin: ['xu', 'hui']
        },
        {
            id: '310105',
            name: '长宁',
            fullname: '长宁区',
            pinyin: ['chang', 'ning']
        },
        {
            id: '310106',
            name: '静安',
            fullname: '静安区',
            pinyin: ['jing', 'an']
        },
        {
            id: '310107',
            name: '普陀',
            fullname: '普陀区',
            pinyin: ['pu', 'tuo']
        },
        {
            id: '310109',
            name: '虹口',
            fullname: '虹口区',
            pinyin: ['hong', 'kou']
        },
        {
            id: '310110',
            name: '杨浦',
            fullname: '杨浦区',
            pinyin: ['yang', 'pu']
        },
        {
            id: '310112',
            name: '闵行',
            fullname: '闵行区',
            pinyin: ['min', 'hang']
        },
        {
            id: '310113',
            name: '宝山',
            fullname: '宝山区',
            pinyin: ['bao', 'shan']
        },
        {
            id: '310114',
            name: '嘉定',
            fullname: '嘉定区',
            pinyin: ['jia', 'ding']
        },
        {
            id: '310115',
            name: '浦东',
            fullname: '浦东新区',
            pinyin: ['pu', 'dong']
        },
        {
            id: '310116',
            name: '金山',
            fullname: '金山区',
            pinyin: ['jin', 'shan']
        },
        {
            id: '310117',
            name: '松江',
            fullname: '松江区',
            pinyin: ['song', 'jiang']
        },
        {
            id: '310118',
            name: '青浦',
            fullname: '青浦区',
            pinyin: ['qing', 'pu']
        },
        {
            id: '310120',
            name: '奉贤',
            fullname: '奉贤区',
            pinyin: ['feng', 'xian']
        },
        {
            id: '310151',
            name: '崇明',
            fullname: '崇明区',
            pinyin: ['chong', 'ming']
        }
    ],
    //------------------------------------------------------------------------------------

    [
        {
            id: '320100',
            name: '南京',
            fullname: '南京市',
            pinyin: ['nan', 'jing']
        },
        {
            id: '320200',
            name: '无锡',
            fullname: '无锡市',
            pinyin: ['wu', 'xi']
        },
        {
            id: '320300',
            name: '徐州',
            fullname: '徐州市',
            pinyin: ['xu', 'zhou']
        },
        {
            id: '320400',
            name: '常州',
            fullname: '常州市',
            pinyin: ['chang', 'zhou']
        },
        {
            id: '320500',
            name: '苏州',
            fullname: '苏州市',
            pinyin: ['su', 'zhou']
        },
        {
            id: '320600',
            name: '南通',
            fullname: '南通市',
            pinyin: ['nan', 'tong']
        },
        {
            id: '320700',
            name: '连云港',
            fullname: '连云港市',
            pinyin: ['lian', 'yun', 'gang']
        },
        {
            id: '320800',
            name: '淮安',
            fullname: '淮安市',
            pinyin: ['huai', 'an']
        },
        {
            id: '320900',
            name: '盐城',
            fullname: '盐城市',
            pinyin: ['yan', 'cheng']
        },
        {
            id: '321000',
            name: '扬州',
            fullname: '扬州市',
            pinyin: ['yang', 'zhou']
        },
        {
            id: '321100',
            name: '镇江',
            fullname: '镇江市',
            pinyin: ['zhen', 'jiang']
        },
        {
            id: '321200',
            name: '泰州',
            fullname: '泰州市',
            pinyin: ['tai', 'zhou']
        },
        {
            id: '321300',
            name: '宿迁',
            fullname: '宿迁市',
            pinyin: ['su', 'qian']
        }
    ],
    //------------------------------------------------------------------------------------

    [
        {
            id: '330100',
            name: '杭州',
            fullname: '杭州市',
            pinyin: ['hang', 'zhou']
        },
        {
            id: '330200',
            name: '宁波',
            fullname: '宁波市',
            pinyin: ['ning', 'bo']
        },
        {
            id: '330300',
            name: '温州',
            fullname: '温州市',
            pinyin: ['wen', 'zhou']
        },
        {
            id: '330400',
            name: '嘉兴',
            fullname: '嘉兴市',
            pinyin: ['jia', 'xing']
        },
        {
            id: '330500',
            name: '湖州',
            fullname: '湖州市',
            pinyin: ['hu', 'zhou']
        },
        {
            id: '330600',
            name: '绍兴',
            fullname: '绍兴市',
            pinyin: ['shao', 'xing']
        },
        {
            id: '330700',
            name: '金华',
            fullname: '金华市',
            pinyin: ['jin', 'hua']
        },
        {
            id: '330800',
            name: '衢州',
            fullname: '衢州市',
            pinyin: ['qu', 'zhou']
        },
        {
            id: '330900',
            name: '舟山',
            fullname: '舟山市',
            pinyin: ['zhou', 'shan']
        },
        {
            id: '331000',
            name: '台州',
            fullname: '台州市',
            pinyin: ['tai', 'zhou']
        },
        {
            id: '331100',
            name: '丽水',
            fullname: '丽水市',
            pinyin: ['li', 'shui']
        }
    ],
    //------------------------------------------------------------------------------------

    [
        {
            id: '340100',
            name: '合肥',
            fullname: '合肥市',
            pinyin: ['he', 'fei']
        },
        {
            id: '340200',
            name: '芜湖',
            fullname: '芜湖市',
            pinyin: ['wu', 'hu']
        },
        {
            id: '340300',
            name: '蚌埠',
            fullname: '蚌埠市',
            pinyin: ['beng', 'bu']
        },
        {
            id: '340400',
            name: '淮南',
            fullname: '淮南市',
            pinyin: ['huai', 'nan']
        },
        {
            id: '340500',
            name: '马鞍山',
            fullname: '马鞍山市',
            pinyin: ['ma', 'an', 'shan']
        },
        {
            id: '340600',
            name: '淮北',
            fullname: '淮北市',
            pinyin: ['huai', 'bei']
        },
        {
            id: '340700',
            name: '铜陵',
            fullname: '铜陵市',
            pinyin: ['tong', 'ling']
        },
        {
            id: '340800',
            name: '安庆',
            fullname: '安庆市',
            pinyin: ['an', 'qing']
        },
        {
            id: '341000',
            name: '黄山',
            fullname: '黄山市',
            pinyin: ['huang', 'shan']
        },
        {
            id: '341100',
            name: '滁州',
            fullname: '滁州市',
            pinyin: ['chu', 'zhou']
        },
        {
            id: '341200',
            name: '阜阳',
            fullname: '阜阳市',
            pinyin: ['fu', 'yang']
        },
        {
            id: '341300',
            name: '宿州',
            fullname: '宿州市',
            pinyin: ['su', 'zhou']
        },
        {
            id: '341500',
            name: '六安',
            fullname: '六安市',
            pinyin: ['liu', 'an']
        },
        {
            id: '341600',
            name: '亳州',
            fullname: '亳州市',
            pinyin: ['bo', 'zhou']
        },
        {
            id: '341700',
            name: '池州',
            fullname: '池州市',
            pinyin: ['chi', 'zhou']
        },
        {
            id: '341800',
            name: '宣城',
            fullname: '宣城市',
            pinyin: ['xuan', 'cheng']
        }
    ],
    //------------------------------------------------------------------------------------

    [
        {
            id: '350100',
            name: '福州',
            fullname: '福州市',
            pinyin: ['fu', 'zhou']
        },
        {
            id: '350200',
            name: '厦门',
            fullname: '厦门市',
            pinyin: ['xia', 'men']
        },
        {
            id: '350300',
            name: '莆田',
            fullname: '莆田市',
            pinyin: ['pu', 'tian']
        },
        {
            id: '350400',
            name: '三明',
            fullname: '三明市',
            pinyin: ['san', 'ming']
        },
        {
            id: '350500',
            name: '泉州',
            fullname: '泉州市',
            pinyin: ['quan', 'zhou']
        },
        {
            id: '350600',
            name: '漳州',
            fullname: '漳州市',
            pinyin: ['zhang', 'zhou']
        },
        {
            id: '350700',
            name: '南平',
            fullname: '南平市',
            pinyin: ['nan', 'ping']
        },
        {
            id: '350800',
            name: '龙岩',
            fullname: '龙岩市',
            pinyin: ['long', 'yan']
        },
        {
            id: '350900',
            name: '宁德',
            fullname: '宁德市',
            pinyin: ['ning', 'de']
        }
    ],
    //------------------------------------------------------------------------------------

    [
        {
            id: '360100',
            name: '南昌',
            fullname: '南昌市',
            pinyin: ['nan', 'chang']
        },
        {
            id: '360200',
            name: '景德镇',
            fullname: '景德镇市',
            pinyin: ['jing', 'de', 'zhen']
        },
        {
            id: '360300',
            name: '萍乡',
            fullname: '萍乡市',
            pinyin: ['ping', 'xiang']
        },
        {
            id: '360400',
            name: '九江',
            fullname: '九江市',
            pinyin: ['jiu', 'jiang']
        },
        {
            id: '360500',
            name: '新余',
            fullname: '新余市',
            pinyin: ['xin', 'yu']
        },
        {
            id: '360600',
            name: '鹰潭',
            fullname: '鹰潭市',
            pinyin: ['ying', 'tan']
        },
        {
            id: '360700',
            name: '赣州',
            fullname: '赣州市',
            pinyin: ['gan', 'zhou']
        },
        {
            id: '360800',
            name: '吉安',
            fullname: '吉安市',
            pinyin: ['ji', 'an']
        },
        {
            id: '360900',
            name: '宜春',
            fullname: '宜春市',
            pinyin: ['yi', 'chun']
        },
        {
            id: '361000',
            name: '抚州',
            fullname: '抚州市',
            pinyin: ['fu', 'zhou']
        },
        {
            id: '361100',
            name: '上饶',
            fullname: '上饶市',
            pinyin: ['shang', 'rao']
        }
    ],
    //------------------------------------------------------------------------------------

    [
        {
            id: '370100',
            name: '济南',
            fullname: '济南市',
            pinyin: ['ji', 'nan']
        },
        {
            id: '370200',
            name: '青岛',
            fullname: '青岛市',
            pinyin: ['qing', 'dao']
        },
        {
            id: '370300',
            name: '淄博',
            fullname: '淄博市',
            pinyin: ['zi', 'bo']
        },
        {
            id: '370400',
            name: '枣庄',
            fullname: '枣庄市',
            pinyin: ['zao', 'zhuang']
        },
        {
            id: '370500',
            name: '东营',
            fullname: '东营市',
            pinyin: ['dong', 'ying']
        },
        {
            id: '370600',
            name: '烟台',
            fullname: '烟台市',
            pinyin: ['yan', 'tai']
        },
        {
            id: '370700',
            name: '潍坊',
            fullname: '潍坊市',
            pinyin: ['wei', 'fang']
        },
        {
            id: '370800',
            name: '济宁',
            fullname: '济宁市',
            pinyin: ['ji', 'ning']
        },
        {
            id: '370900',
            name: '泰安',
            fullname: '泰安市',
            pinyin: ['tai', 'an']
        },
        {
            id: '371000',
            name: '威海',
            fullname: '威海市',
            pinyin: ['wei', 'hai']
        },
        {
            id: '371100',
            name: '日照',
            fullname: '日照市',
            pinyin: ['ri', 'zhao']
        },
        {
            id: '371300',
            name: '临沂',
            fullname: '临沂市',
            pinyin: ['lin', 'yi']
        },
        {
            id: '371400',
            name: '德州',
            fullname: '德州市',
            pinyin: ['de', 'zhou']
        },
        {
            id: '371500',
            name: '聊城',
            fullname: '聊城市',
            pinyin: ['liao', 'cheng']
        },
        {
            id: '371600',
            name: '滨州',
            fullname: '滨州市',
            pinyin: ['bin', 'zhou']
        },
        {
            id: '371700',
            name: '菏泽',
            fullname: '菏泽市',
            pinyin: ['he', 'ze']
        }
    ],
    //------------------------------------------------------------------------------------

    [
        {
            id: '410100',
            name: '郑州',
            fullname: '郑州市',
            pinyin: ['zheng', 'zhou']
        },
        {
            id: '410200',
            name: '开封',
            fullname: '开封市',
            pinyin: ['kai', 'feng']
        },
        {
            id: '410300',
            name: '洛阳',
            fullname: '洛阳市',
            pinyin: ['luo', 'yang']
        },
        {
            id: '410400',
            name: '平顶山',
            fullname: '平顶山市',
            pinyin: ['ping', 'ding', 'shan']
        },
        {
            id: '410500',
            name: '安阳',
            fullname: '安阳市',
            pinyin: ['an', 'yang']
        },
        {
            id: '410600',
            name: '鹤壁',
            fullname: '鹤壁市',
            pinyin: ['he', 'bi']
        },
        {
            id: '410700',
            name: '新乡',
            fullname: '新乡市',
            pinyin: ['xin', 'xiang']
        },
        {
            id: '410800',
            name: '焦作',
            fullname: '焦作市',
            pinyin: ['jiao', 'zuo']
        },
        {
            id: '410900',
            name: '濮阳',
            fullname: '濮阳市',
            pinyin: ['pu', 'yang']
        },
        {
            id: '411000',
            name: '许昌',
            fullname: '许昌市',
            pinyin: ['xu', 'chang']
        },
        {
            id: '411100',
            name: '漯河',
            fullname: '漯河市',
            pinyin: ['luo', 'he']
        },
        {
            id: '411200',
            name: '三门峡',
            fullname: '三门峡市',
            pinyin: ['san', 'men', 'xia']
        },
        {
            id: '411300',
            name: '南阳',
            fullname: '南阳市',
            pinyin: ['nan', 'yang']
        },
        {
            id: '411400',
            name: '商丘',
            fullname: '商丘市',
            pinyin: ['shang', 'qiu']
        },
        {
            id: '411500',
            name: '信阳',
            fullname: '信阳市',
            pinyin: ['xin', 'yang']
        },
        {
            id: '411600',
            name: '周口',
            fullname: '周口市',
            pinyin: ['zhou', 'kou']
        },
        {
            id: '411700',
            name: '驻马店',
            fullname: '驻马店市',
            pinyin: ['zhu', 'ma', 'dian']
        },
        {
            id: '419001',
            name: '济源',
            fullname: '济源市',
            pinyin: ['ji', 'yuan']
        }
    ],
    //------------------------------------------------------------------------------------

    [
        {
            id: '420100',
            name: '武汉',
            fullname: '武汉市',
            pinyin: ['wu', 'han']
        },
        {
            id: '420200',
            name: '黄石',
            fullname: '黄石市',
            pinyin: ['huang', 'shi']
        },
        {
            id: '420300',
            name: '十堰',
            fullname: '十堰市',
            pinyin: ['shi', 'yan']
        },
        {
            id: '420500',
            name: '宜昌',
            fullname: '宜昌市',
            pinyin: ['yi', 'chang']
        },
        {
            id: '420600',
            name: '襄阳',
            fullname: '襄阳市',
            pinyin: ['xiang', 'yang']
        },
        {
            id: '420700',
            name: '鄂州',
            fullname: '鄂州市',
            pinyin: ['e', 'zhou']
        },
        {
            id: '420800',
            name: '荆门',
            fullname: '荆门市',
            pinyin: ['jing', 'men']
        },
        {
            id: '420900',
            name: '孝感',
            fullname: '孝感市',
            pinyin: ['xiao', 'gan']
        },
        {
            id: '421000',
            name: '荆州',
            fullname: '荆州市',
            pinyin: ['jing', 'zhou']
        },
        {
            id: '421100',
            name: '黄冈',
            fullname: '黄冈市',
            pinyin: ['huang', 'gang']
        },
        {
            id: '421200',
            name: '咸宁',
            fullname: '咸宁市',
            pinyin: ['xian', 'ning']
        },
        {
            id: '421300',
            name: '随州',
            fullname: '随州市',
            pinyin: ['sui', 'zhou']
        },
        {
            id: '422800',
            name: '恩施',
            fullname: '恩施土家族苗族自治州',
            pinyin: ['en', 'shi']
        },
        {
            id: '429004',
            name: '仙桃',
            fullname: '仙桃市',
            pinyin: ['xian', 'tao']
        },
        {
            id: '429005',
            name: '潜江',
            fullname: '潜江市',
            pinyin: ['qian', 'jiang']
        },
        {
            id: '429006',
            name: '天门',
            fullname: '天门市',
            pinyin: ['tian', 'men']
        },
        {
            id: '429021',
            name: '神农架',
            fullname: '神农架林区',
            pinyin: ['shen', 'nong', 'jia']
        }
    ],
    //------------------------------------------------------------------------------------

    [
        {
            id: '430100',
            name: '长沙',
            fullname: '长沙市',
            pinyin: ['chang', 'sha']
        },
        {
            id: '430200',
            name: '株洲',
            fullname: '株洲市',
            pinyin: ['zhu', 'zhou']
        },
        {
            id: '430300',
            name: '湘潭',
            fullname: '湘潭市',
            pinyin: ['xiang', 'tan']
        },
        {
            id: '430400',
            name: '衡阳',
            fullname: '衡阳市',
            pinyin: ['heng', 'yang']
        },
        {
            id: '430500',
            name: '邵阳',
            fullname: '邵阳市',
            pinyin: ['shao', 'yang']
        },
        {
            id: '430600',
            name: '岳阳',
            fullname: '岳阳市',
            pinyin: ['yue', 'yang']
        },
        {
            id: '430700',
            name: '常德',
            fullname: '常德市',
            pinyin: ['chang', 'de']
        },
        {
            id: '430800',
            name: '张家界',
            fullname: '张家界市',
            pinyin: ['zhang', 'jia', 'jie']
        },
        {
            id: '430900',
            name: '益阳',
            fullname: '益阳市',
            pinyin: ['yi', 'yang']
        },
        {
            id: '431000',
            name: '郴州',
            fullname: '郴州市',
            pinyin: ['chen', 'zhou']
        },
        {
            id: '431100',
            name: '永州',
            fullname: '永州市',
            pinyin: ['yong', 'zhou']
        },
        {
            id: '431200',
            name: '怀化',
            fullname: '怀化市',
            pinyin: ['huai', 'hua']
        },
        {
            id: '431300',
            name: '娄底',
            fullname: '娄底市',
            pinyin: ['lou', 'di']
        },
        {
            id: '433100',
            name: '湘西',
            fullname: '湘西土家族苗族自治州',
            pinyin: ['xiang', 'xi']
        }
    ],
    //------------------------------------------------------------------------------------

    [
        {
            id: '440100',
            name: '广州',
            fullname: '广州市',
            pinyin: ['guang', 'zhou']
        },
        {
            id: '440200',
            name: '韶关',
            fullname: '韶关市',
            pinyin: ['shao', 'guan']
        },
        {
            id: '440300',
            name: '深圳',
            fullname: '深圳市',
            pinyin: ['shen', 'zhen']
        },
        {
            id: '440400',
            name: '珠海',
            fullname: '珠海市',
            pinyin: ['zhu', 'hai']
        },
        {
            id: '440500',
            name: '汕头',
            fullname: '汕头市',
            pinyin: ['shan', 'tou']
        },
        {
            id: '440600',
            name: '佛山',
            fullname: '佛山市',
            pinyin: ['fo', 'shan']
        },
        {
            id: '440700',
            name: '江门',
            fullname: '江门市',
            pinyin: ['jiang', 'men']
        },
        {
            id: '440800',
            name: '湛江',
            fullname: '湛江市',
            pinyin: ['zhan', 'jiang']
        },
        {
            id: '440900',
            name: '茂名',
            fullname: '茂名市',
            pinyin: ['mao', 'ming']
        },
        {
            id: '441200',
            name: '肇庆',
            fullname: '肇庆市',
            pinyin: ['zhao', 'qing']
        },
        {
            id: '441300',
            name: '惠州',
            fullname: '惠州市',
            pinyin: ['hui', 'zhou']
        },
        {
            id: '441400',
            name: '梅州',
            fullname: '梅州市',
            pinyin: ['mei', 'zhou']
        },
        {
            id: '441500',
            name: '汕尾',
            fullname: '汕尾市',
            pinyin: ['shan', 'wei']
        },
        {
            id: '441600',
            name: '河源',
            fullname: '河源市',
            pinyin: ['he', 'yuan']
        },
        {
            id: '441700',
            name: '阳江',
            fullname: '阳江市',
            pinyin: ['yang', 'jiang']
        },
        {
            id: '441800',
            name: '清远',
            fullname: '清远市',
            pinyin: ['qing', 'yuan']
        },
        {
            id: '441900',
            name: '东莞',
            fullname: '东莞市',
            pinyin: ['dong', 'guan']
        },
        {
            id: '442000',
            name: '中山',
            fullname: '中山市',
            pinyin: ['zhong', 'shan']
        },
        {
            id: '445100',
            name: '潮州',
            fullname: '潮州市',
            pinyin: ['chao', 'zhou']
        },
        {
            id: '445200',
            name: '揭阳',
            fullname: '揭阳市',
            pinyin: ['jie', 'yang']
        },
        {
            id: '445300',
            name: '云浮',
            fullname: '云浮市',
            pinyin: ['yun', 'fu']
        }
    ],
    //------------------------------------------------------------------------------------

    [
        {
            id: '450100',
            name: '南宁',
            fullname: '南宁市',
            pinyin: ['nan', 'ning']
        },
        {
            id: '450200',
            name: '柳州',
            fullname: '柳州市',
            pinyin: ['liu', 'zhou']
        },
        {
            id: '450300',
            name: '桂林',
            fullname: '桂林市',
            pinyin: ['gui', 'lin']
        },
        {
            id: '450400',
            name: '梧州',
            fullname: '梧州市',
            pinyin: ['wu', 'zhou']
        },
        {
            id: '450500',
            name: '北海',
            fullname: '北海市',
            pinyin: ['bei', 'hai']
        },
        {
            id: '450600',
            name: '防城港',
            fullname: '防城港市',
            pinyin: ['fang', 'cheng', 'gang']
        },
        {
            id: '450700',
            name: '钦州',
            fullname: '钦州市',
            pinyin: ['qin', 'zhou']
        },
        {
            id: '450800',
            name: '贵港',
            fullname: '贵港市',
            pinyin: ['gui', 'gang']
        },
        {
            id: '450900',
            name: '玉林',
            fullname: '玉林市',
            pinyin: ['yu', 'lin']
        },
        {
            id: '451000',
            name: '百色',
            fullname: '百色市',
            pinyin: ['bai', 'se']
        },
        {
            id: '451100',
            name: '贺州',
            fullname: '贺州市',
            pinyin: ['he', 'zhou']
        },
        {
            id: '451200',
            name: '河池',
            fullname: '河池市',
            pinyin: ['he', 'chi']
        },
        {
            id: '451300',
            name: '来宾',
            fullname: '来宾市',
            pinyin: ['lai', 'bin']
        },
        {
            id: '451400',
            name: '崇左',
            fullname: '崇左市',
            pinyin: ['chong', 'zuo']
        }
    ],
    //------------------------------------------------------------------------------------

    [
        {
            id: '460100',
            name: '海口',
            fullname: '海口市',
            pinyin: ['hai', 'kou']
        },
        {
            id: '460200',
            name: '三亚',
            fullname: '三亚市',
            pinyin: ['san', 'ya']
        },
        {
            id: '460300',
            name: '三沙',
            fullname: '三沙市',
            pinyin: ['san', 'sha']
        },
        {
            id: '460400',
            name: '儋州',
            fullname: '儋州市',
            pinyin: ['dan', 'zhou']
        },
        {
            id: '469001',
            name: '五指山',
            fullname: '五指山市',
            pinyin: ['wu', 'zhi', 'shan']
        },
        {
            id: '469002',
            name: '琼海',
            fullname: '琼海市',
            pinyin: ['qiong', 'hai']
        },
        {
            id: '469005',
            name: '文昌',
            fullname: '文昌市',
            pinyin: ['wen', 'chang']
        },
        {
            id: '469006',
            name: '万宁',
            fullname: '万宁市',
            pinyin: ['wan', 'ning']
        },
        {
            id: '469007',
            name: '东方',
            fullname: '东方市',
            pinyin: ['dong', 'fang']
        },
        {
            id: '469021',
            name: '定安',
            fullname: '定安县',
            pinyin: ['ding', 'an']
        },
        {
            id: '469022',
            name: '屯昌',
            fullname: '屯昌县',
            pinyin: ['tun', 'chang']
        },
        {
            id: '469023',
            name: '澄迈',
            fullname: '澄迈县',
            pinyin: ['cheng', 'mai']
        },
        {
            id: '469024',
            name: '临高',
            fullname: '临高县',
            pinyin: ['lin', 'gao']
        },
        {
            id: '469025',
            name: '白沙',
            fullname: '白沙黎族自治县',
            pinyin: ['bai', 'sha']
        },
        {
            id: '469026',
            name: '昌江',
            fullname: '昌江黎族自治县',
            pinyin: ['chang', 'jiang']
        },
        {
            id: '469027',
            name: '乐东',
            fullname: '乐东黎族自治县',
            pinyin: ['le', 'dong']
        },
        {
            id: '469028',
            name: '陵水',
            fullname: '陵水黎族自治县',
            pinyin: ['ling', 'shui']
        },
        {
            id: '469029',
            name: '保亭',
            fullname: '保亭黎族苗族自治县',
            pinyin: ['bao', 'ting']
        },
        {
            id: '469030',
            name: '琼中',
            fullname: '琼中黎族苗族自治县',
            pinyin: ['qiong', 'zhong']
        }
    ],
    //------------------------------------------------------------------------------------

    [
        {
            id: '500101',
            name: '万州',
            fullname: '万州区',
            pinyin: ['wan', 'zhou']
        },
        {
            id: '500102',
            name: '涪陵',
            fullname: '涪陵区',
            pinyin: ['fu', 'ling']
        },
        {
            id: '500103',
            name: '渝中',
            fullname: '渝中区',
            pinyin: ['yu', 'zhong']
        },
        {
            id: '500104',
            name: '大渡口',
            fullname: '大渡口区',
            pinyin: ['da', 'du', 'kou']
        },
        {
            id: '500105',
            name: '江北',
            fullname: '江北区',
            pinyin: ['jiang', 'bei']
        },
        {
            id: '500106',
            name: '沙坪坝',
            fullname: '沙坪坝区',
            pinyin: ['sha', 'ping', 'ba']
        },
        {
            id: '500107',
            name: '九龙坡',
            fullname: '九龙坡区',
            pinyin: ['jiu', 'long', 'po']
        },
        {
            id: '500108',
            name: '南岸',
            fullname: '南岸区',
            pinyin: ['nan', 'an']
        },
        {
            id: '500109',
            name: '北碚',
            fullname: '北碚区',
            pinyin: ['bei', 'bei']
        },
        {
            id: '500110',
            name: '綦江',
            fullname: '綦江区',
            pinyin: ['qi', 'jiang']
        },
        {
            id: '500111',
            name: '大足',
            fullname: '大足区',
            pinyin: ['da', 'zu']
        },
        {
            id: '500112',
            name: '渝北',
            fullname: '渝北区',
            pinyin: ['yu', 'bei']
        },
        {
            id: '500113',
            name: '巴南',
            fullname: '巴南区',
            pinyin: ['ba', 'nan']
        },
        {
            id: '500114',
            name: '黔江',
            fullname: '黔江区',
            pinyin: ['qian', 'jiang']
        },
        {
            id: '500115',
            name: '长寿',
            fullname: '长寿区',
            pinyin: ['chang', 'shou']
        },
        {
            id: '500116',
            name: '江津',
            fullname: '江津区',
            pinyin: ['jiang', 'jin']
        },
        {
            id: '500117',
            name: '合川',
            fullname: '合川区',
            pinyin: ['he', 'chuan']
        },
        {
            id: '500118',
            name: '永川',
            fullname: '永川区',
            pinyin: ['yong', 'chuan']
        },
        {
            id: '500119',
            name: '南川',
            fullname: '南川区',
            pinyin: ['nan', 'chuan']
        },
        {
            id: '500120',
            name: '璧山',
            fullname: '璧山区',
            pinyin: ['bi', 'shan']
        },
        {
            id: '500151',
            name: '铜梁',
            fullname: '铜梁区',
            pinyin: ['tong', 'liang']
        },
        {
            id: '500152',
            name: '潼南',
            fullname: '潼南区',
            pinyin: ['tong', 'nan']
        },
        {
            id: '500153',
            name: '荣昌',
            fullname: '荣昌区',
            pinyin: ['rong', 'chang']
        },
        {
            id: '500154',
            name: '开州',
            fullname: '开州区',
            pinyin: ['kai', 'zhou']
        },
        {
            id: '500155',
            name: '梁平',
            fullname: '梁平区',
            pinyin: ['liang', 'ping']
        },
        {
            id: '500156',
            name: '武隆',
            fullname: '武隆区',
            pinyin: ['wu', 'long']
        },
        {
            id: '500229',
            name: '城口',
            fullname: '城口县',
            pinyin: ['cheng', 'kou']
        },
        {
            id: '500230',
            name: '丰都',
            fullname: '丰都县',
            pinyin: ['feng', 'du']
        },
        {
            id: '500231',
            name: '垫江',
            fullname: '垫江县',
            pinyin: ['dian', 'jiang']
        },
        {
            id: '500233',
            name: '忠县',
            fullname: '忠县',
            pinyin: ['zhong', 'xian']
        },
        {
            id: '500235',
            name: '云阳',
            fullname: '云阳县',
            pinyin: ['yun', 'yang']
        },
        {
            id: '500236',
            name: '奉节',
            fullname: '奉节县',
            pinyin: ['feng', 'jie']
        },
        {
            id: '500237',
            name: '巫山',
            fullname: '巫山县',
            pinyin: ['wu', 'shan']
        },
        {
            id: '500238',
            name: '巫溪',
            fullname: '巫溪县',
            pinyin: ['wu', 'xi']
        },
        {
            id: '500240',
            name: '石柱',
            fullname: '石柱土家族自治县',
            pinyin: ['shi', 'zhu']
        },
        {
            id: '500241',
            name: '秀山',
            fullname: '秀山土家族苗族自治县',
            pinyin: ['xiu', 'shan']
        },
        {
            id: '500242',
            name: '酉阳',
            fullname: '酉阳土家族苗族自治县',
            pinyin: ['you', 'yang']
        },
        {
            id: '500243',
            name: '彭水',
            fullname: '彭水苗族土家族自治县',
            pinyin: ['peng', 'shui']
        }
    ],
    //------------------------------------------------------------------------------------

    [
        {
            id: '510100',
            name: '成都',
            fullname: '成都市',
            pinyin: ['cheng', 'du']
        },
        {
            id: '510300',
            name: '自贡',
            fullname: '自贡市',
            pinyin: ['zi', 'gong']
        },
        {
            id: '510400',
            name: '攀枝花',
            fullname: '攀枝花市',
            pinyin: ['pan', 'zhi', 'hua']
        },
        {
            id: '510500',
            name: '泸州',
            fullname: '泸州市',
            pinyin: ['lu', 'zhou']
        },
        {
            id: '510600',
            name: '德阳',
            fullname: '德阳市',
            pinyin: ['de', 'yang']
        },
        {
            id: '510700',
            name: '绵阳',
            fullname: '绵阳市',
            pinyin: ['mian', 'yang']
        },
        {
            id: '510800',
            name: '广元',
            fullname: '广元市',
            pinyin: ['guang', 'yuan']
        },
        {
            id: '510900',
            name: '遂宁',
            fullname: '遂宁市',
            pinyin: ['sui', 'ning']
        },
        {
            id: '511000',
            name: '内江',
            fullname: '内江市',
            pinyin: ['nei', 'jiang']
        },
        {
            id: '511100',
            name: '乐山',
            fullname: '乐山市',
            pinyin: ['le', 'shan']
        },
        {
            id: '511300',
            name: '南充',
            fullname: '南充市',
            pinyin: ['nan', 'chong']
        },
        {
            id: '511400',
            name: '眉山',
            fullname: '眉山市',
            pinyin: ['mei', 'shan']
        },
        {
            id: '511500',
            name: '宜宾',
            fullname: '宜宾市',
            pinyin: ['yi', 'bin']
        },
        {
            id: '511600',
            name: '广安',
            fullname: '广安市',
            pinyin: ['guang', 'an']
        },
        {
            id: '511700',
            name: '达州',
            fullname: '达州市',
            pinyin: ['da', 'zhou']
        },
        {
            id: '511800',
            name: '雅安',
            fullname: '雅安市',
            pinyin: ['ya', 'an']
        },
        {
            id: '511900',
            name: '巴中',
            fullname: '巴中市',
            pinyin: ['ba', 'zhong']
        },
        {
            id: '512000',
            name: '资阳',
            fullname: '资阳市',
            pinyin: ['zi', 'yang']
        },
        {
            id: '513200',
            name: '阿坝',
            fullname: '阿坝藏族羌族自治州',
            pinyin: ['a', 'ba']
        },
        {
            id: '513300',
            name: '甘孜',
            fullname: '甘孜藏族自治州',
            pinyin: ['gan', 'zi']
        },
        {
            id: '513400',
            name: '凉山',
            fullname: '凉山彝族自治州',
            pinyin: ['liang', 'shan']
        }
    ],
    //------------------------------------------------------------------------------------

    [
        {
            id: '520100',
            name: '贵阳',
            fullname: '贵阳市',
            pinyin: ['gui', 'yang']
        },
        {
            id: '520200',
            name: '六盘水',
            fullname: '六盘水市',
            pinyin: ['liu', 'pan', 'shui']
        },
        {
            id: '520300',
            name: '遵义',
            fullname: '遵义市',
            pinyin: ['zun', 'yi']
        },
        {
            id: '520400',
            name: '安顺',
            fullname: '安顺市',
            pinyin: ['an', 'shun']
        },
        {
            id: '520500',
            name: '毕节',
            fullname: '毕节市',
            pinyin: ['bi', 'jie']
        },
        {
            id: '520600',
            name: '铜仁',
            fullname: '铜仁市',
            pinyin: ['tong', 'ren']
        },
        {
            id: '522300',
            name: '黔西南',
            fullname: '黔西南布依族苗族自治州',
            pinyin: ['qian', 'xi', 'nan']
        },
        {
            id: '522600',
            name: '黔东南',
            fullname: '黔东南苗族侗族自治州',
            pinyin: ['qian', 'dong', 'nan']
        },
        {
            id: '522700',
            name: '黔南',
            fullname: '黔南布依族苗族自治州',
            pinyin: ['qian', 'nan']
        }
    ],
    //------------------------------------------------------------------------------------

    [
        {
            id: '530100',
            name: '昆明',
            fullname: '昆明市',
            pinyin: ['kun', 'ming']
        },
        {
            id: '530300',
            name: '曲靖',
            fullname: '曲靖市',
            pinyin: ['qu', 'jing']
        },
        {
            id: '530400',
            name: '玉溪',
            fullname: '玉溪市',
            pinyin: ['yu', 'xi']
        },
        {
            id: '530500',
            name: '保山',
            fullname: '保山市',
            pinyin: ['bao', 'shan']
        },
        {
            id: '530600',
            name: '昭通',
            fullname: '昭通市',
            pinyin: ['zhao', 'tong']
        },
        {
            id: '530700',
            name: '丽江',
            fullname: '丽江市',
            pinyin: ['li', 'jiang']
        },
        {
            id: '530800',
            name: '普洱',
            fullname: '普洱市',
            pinyin: ['pu', 'er']
        },
        {
            id: '530900',
            name: '临沧',
            fullname: '临沧市',
            pinyin: ['lin', 'cang']
        },
        {
            id: '532300',
            name: '楚雄',
            fullname: '楚雄彝族自治州',
            pinyin: ['chu', 'xiong']
        },
        {
            id: '532500',
            name: '红河',
            fullname: '红河哈尼族彝族自治州',
            pinyin: ['hong', 'he']
        },
        {
            id: '532600',
            name: '文山',
            fullname: '文山壮族苗族自治州',
            pinyin: ['wen', 'shan']
        },
        {
            id: '532800',
            name: '西双版纳',
            fullname: '西双版纳傣族自治州',
            pinyin: ['xi', 'shuang', 'ban', 'na']
        },
        {
            id: '532900',
            name: '大理',
            fullname: '大理白族自治州',
            pinyin: ['da', 'li']
        },
        {
            id: '533100',
            name: '德宏',
            fullname: '德宏傣族景颇族自治州',
            pinyin: ['de', 'hong']
        },
        {
            id: '533300',
            name: '怒江',
            fullname: '怒江傈僳族自治州',
            pinyin: ['nu', 'jiang']
        },
        {
            id: '533400',
            name: '迪庆',
            fullname: '迪庆藏族自治州',
            pinyin: ['di', 'qing']
        }
    ],
    //------------------------------------------------------------------------------------

    [
        {
            id: '540100',
            name: '拉萨',
            fullname: '拉萨市',
            pinyin: ['la', 'sa']
        },
        {
            id: '540200',
            name: '日喀则',
            fullname: '日喀则市',
            pinyin: ['ri', 'ka', 'ze']
        },
        {
            id: '540300',
            name: '昌都',
            fullname: '昌都市',
            pinyin: ['chang', 'du']
        },
        {
            id: '540400',
            name: '林芝',
            fullname: '林芝市',
            pinyin: ['lin', 'zhi']
        },
        {
            id: '540500',
            name: '山南',
            fullname: '山南市',
            pinyin: ['shan', 'nan']
        },
        {
            id: '540600',
            name: '那曲',
            fullname: '那曲市',
            pinyin: ['na', 'qu']
        },
        {
            id: '542500',
            name: '阿里',
            fullname: '阿里地区',
            pinyin: ['a', 'li']
        }
    ],
    //------------------------------------------------------------------------------------

    [
        {
            id: '610100',
            name: '西安',
            fullname: '西安市',
            pinyin: ['xi', 'an']
        },
        {
            id: '610200',
            name: '铜川',
            fullname: '铜川市',
            pinyin: ['tong', 'chuan']
        },
        {
            id: '610300',
            name: '宝鸡',
            fullname: '宝鸡市',
            pinyin: ['bao', 'ji']
        },
        {
            id: '610400',
            name: '咸阳',
            fullname: '咸阳市',
            pinyin: ['xian', 'yang']
        },
        {
            id: '610500',
            name: '渭南',
            fullname: '渭南市',
            pinyin: ['wei', 'nan']
        },
        {
            id: '610600',
            name: '延安',
            fullname: '延安市',
            pinyin: ['yan', 'an']
        },
        {
            id: '610700',
            name: '汉中',
            fullname: '汉中市',
            pinyin: ['han', 'zhong']
        },
        {
            id: '610800',
            name: '榆林',
            fullname: '榆林市',
            pinyin: ['yu', 'lin']
        },
        {
            id: '610900',
            name: '安康',
            fullname: '安康市',
            pinyin: ['an', 'kang']
        },
        {
            id: '611000',
            name: '商洛',
            fullname: '商洛市',
            pinyin: ['shang', 'luo']
        }
    ],
    //------------------------------------------------------------------------------------

    [
        {
            id: '620100',
            name: '兰州',
            fullname: '兰州市',
            pinyin: ['lan', 'zhou']
        },
        {
            id: '620200',
            name: '嘉峪关',
            fullname: '嘉峪关市',
            pinyin: ['jia', 'yu', 'guan']
        },
        {
            id: '620300',
            name: '金昌',
            fullname: '金昌市',
            pinyin: ['jin', 'chang']
        },
        {
            id: '620400',
            name: '白银',
            fullname: '白银市',
            pinyin: ['bai', 'yin']
        },
        {
            id: '620500',
            name: '天水',
            fullname: '天水市',
            pinyin: ['tian', 'shui']
        },
        {
            id: '620600',
            name: '武威',
            fullname: '武威市',
            pinyin: ['wu', 'wei']
        },
        {
            id: '620700',
            name: '张掖',
            fullname: '张掖市',
            pinyin: ['zhang', 'ye']
        },
        {
            id: '620800',
            name: '平凉',
            fullname: '平凉市',
            pinyin: ['ping', 'liang']
        },
        {
            id: '620900',
            name: '酒泉',
            fullname: '酒泉市',
            pinyin: ['jiu', 'quan']
        },
        {
            id: '621000',
            name: '庆阳',
            fullname: '庆阳市',
            pinyin: ['qing', 'yang']
        },
        {
            id: '621100',
            name: '定西',
            fullname: '定西市',
            pinyin: ['ding', 'xi']
        },
        {
            id: '621200',
            name: '陇南',
            fullname: '陇南市',
            pinyin: ['long', 'nan']
        },
        {
            id: '622900',
            name: '临夏',
            fullname: '临夏回族自治州',
            pinyin: ['lin', 'xia']
        },
        {
            id: '623000',
            name: '甘南',
            fullname: '甘南藏族自治州',
            pinyin: ['gan', 'nan']
        }
    ],
    //------------------------------------------------------------------------------------

    [
        {
            id: '630100',
            name: '西宁',
            fullname: '西宁市',
            pinyin: ['xi', 'ning']
        },
        {
            id: '630200',
            name: '海东',
            fullname: '海东市',
            pinyin: ['hai', 'dong']
        },
        {
            id: '632200',
            name: '海北',
            fullname: '海北藏族自治州',
            pinyin: ['hai', 'bei']
        },
        {
            id: '632300',
            name: '黄南',
            fullname: '黄南藏族自治州',
            pinyin: ['huang', 'nan']
        },
        {
            id: '632500',
            name: '海南',
            fullname: '海南藏族自治州',
            pinyin: ['hai', 'nan']
        },
        {
            id: '632600',
            name: '果洛',
            fullname: '果洛藏族自治州',
            pinyin: ['guo', 'luo']
        },
        {
            id: '632700',
            name: '玉树',
            fullname: '玉树藏族自治州',
            pinyin: ['yu', 'shu']
        },
        {
            id: '632800',
            name: '海西',
            fullname: '海西蒙古族藏族自治州',
            pinyin: ['hai', 'xi']
        }
    ],
    //------------------------------------------------------------------------------------

    [
        {
            id: '640100',
            name: '银川',
            fullname: '银川市',
            pinyin: ['yin', 'chuan']
        },
        {
            id: '640200',
            name: '石嘴山',
            fullname: '石嘴山市',
            pinyin: ['shi', 'zui', 'shan']
        },
        {
            id: '640300',
            name: '吴忠',
            fullname: '吴忠市',
            pinyin: ['wu', 'zhong']
        },
        {
            id: '640400',
            name: '固原',
            fullname: '固原市',
            pinyin: ['gu', 'yuan']
        },
        {
            id: '640500',
            name: '中卫',
            fullname: '中卫市',
            pinyin: ['zhong', 'wei']
        }
    ],
    //------------------------------------------------------------------------------------

    [
        {
            id: '650100',
            name: '乌鲁木齐',
            fullname: '乌鲁木齐市',
            pinyin: ['wu', 'lu', 'mu', 'qi']
        },
        {
            id: '650200',
            name: '克拉玛依',
            fullname: '克拉玛依市',
            pinyin: ['ke', 'la', 'ma', 'yi']
        },
        {
            id: '650400',
            name: '吐鲁番',
            fullname: '吐鲁番市',
            pinyin: ['tu', 'lu', 'fan']
        },
        {
            id: '650500',
            name: '哈密',
            fullname: '哈密市',
            pinyin: ['ha', 'mi']
        },
        {
            id: '652300',
            name: '昌吉',
            fullname: '昌吉回族自治州',
            pinyin: ['chang', 'ji']
        },
        {
            id: '652700',
            name: '博州',
            fullname: '博尔塔拉蒙古自治州',
            pinyin: ['bo', 'zhou']
        },
        {
            id: '652800',
            name: '巴州',
            fullname: '巴音郭楞蒙古自治州',
            pinyin: ['ba', 'zhou']
        },
        {
            id: '652900',
            name: '阿克苏',
            fullname: '阿克苏地区',
            pinyin: ['a', 'ke', 'su']
        },
        {
            id: '653000',
            name: '克州',
            fullname: '克孜勒苏柯尔克孜自治州',
            pinyin: ['ke', 'zhou']
        },
        {
            id: '653100',
            name: '喀什',
            fullname: '喀什地区',
            pinyin: ['ka', 'shi']
        },
        {
            id: '653200',
            name: '和田',
            fullname: '和田地区',
            pinyin: ['he', 'tian']
        },
        {
            id: '654000',
            name: '伊犁',
            fullname: '伊犁哈萨克自治州',
            pinyin: ['yi', 'li']
        },
        {
            id: '654200',
            name: '塔城',
            fullname: '塔城地区',
            pinyin: ['ta', 'cheng']
        },
        {
            id: '654300',
            name: '阿勒泰',
            fullname: '阿勒泰地区',
            pinyin: ['a', 'le', 'tai']
        },
        {
            id: '659001',
            name: '石河子',
            fullname: '石河子市',
            pinyin: ['shi', 'he', 'zi']
        },
        {
            id: '659002',
            name: '阿拉尔',
            fullname: '阿拉尔市',
            pinyin: ['a', 'la', 'er']
        },
        {
            id: '659003',
            name: '图木舒克',
            fullname: '图木舒克市',
            pinyin: ['tu', 'mu', 'shu', 'ke']
        },
        {
            id: '659004',
            name: '五家渠',
            fullname: '五家渠市',
            pinyin: ['wu', 'jia', 'qu']
        },
        {
            id: '659005',
            name: '北屯',
            fullname: '北屯市',
            pinyin: ['bei', 'tun']
        },
        {
            id: '659006',
            name: '铁门关',
            fullname: '铁门关市',
            pinyin: ['tie', 'men', 'guan']
        },
        {
            id: '659007',
            name: '双河',
            fullname: '双河市',
            pinyin: ['shuang', 'he']
        },
        {
            id: '659008',
            name: '可克达拉',
            fullname: '可克达拉市',
            pinyin: ['ke', 'ke', 'da', 'la']
        },
        {
            id: '659009',
            name: '昆玉',
            fullname: '昆玉市',
            pinyin: ['kun', 'yu']
        },
        {
            id: '659010',
            name: '胡杨河',
            fullname: '胡杨河市',
            pinyin: ['hu', 'yang', 'he']
        },
        {
            id: '659011',
            name: '新星',
            fullname: '新星市',
            pinyin: ['xin', 'xing']
        }
    ],
    //------------------------------------------------------------------------------------

    [
        {
            id: '711000',
            name: '台北',
            fullname: '台北市',
            pinyin: ['tai', 'bei']
        },
        {
            id: '711100',
            name: '台中',
            fullname: '台中市',
            pinyin: ['tai', 'zhong']
        },
        {
            id: '711200',
            name: '基隆',
            fullname: '基隆市',
            pinyin: ['ji', 'long']
        },
        {
            id: '711300',
            name: '台南',
            fullname: '台南市',
            pinyin: ['tai', 'nan']
        },
        {
            id: '711400',
            name: '高雄',
            fullname: '高雄市',
            pinyin: ['gao', 'xiong']
        },
        {
            id: '711500',
            name: '新北',
            fullname: '新北市',
            pinyin: ['xin', 'bei']
        },
        {
            id: '711600',
            name: '宜兰',
            fullname: '宜兰县',
            pinyin: ['yi', 'lan']
        },
        {
            id: '711700',
            name: '桃园',
            fullname: '桃园市',
            pinyin: ['tao', 'yuan']
        },
        {
            id: '711800',
            name: '嘉义',
            fullname: '嘉义市',
            pinyin: ['jia', 'yi']
        },
        {
            id: '711900',
            name: '新竹',
            fullname: '新竹县',
            pinyin: ['xin', 'zhu']
        },
        {
            id: '712000',
            name: '苗栗',
            fullname: '苗栗县',
            pinyin: ['miao', 'li']
        },
        {
            id: '712200',
            name: '南投',
            fullname: '南投县',
            pinyin: ['nan', 'tou']
        },
        {
            id: '712300',
            name: '彰化',
            fullname: '彰化县',
            pinyin: ['zhang', 'hua']
        },
        {
            id: '712400',
            name: '新竹',
            fullname: '新竹市',
            pinyin: ['xin', 'zhu']
        },
        {
            id: '712500',
            name: '云林',
            fullname: '云林县',
            pinyin: ['yun', 'lin']
        },
        {
            id: '712600',
            name: '嘉义',
            fullname: '嘉义县',
            pinyin: ['jia', 'yi']
        },
        {
            id: '712900',
            name: '屏东',
            fullname: '屏东县',
            pinyin: ['ping', 'dong']
        },
        {
            id: '713000',
            name: '花莲',
            fullname: '花莲县',
            pinyin: ['hua', 'lian']
        },
        {
            id: '713100',
            name: '台东',
            fullname: '台东县',
            pinyin: ['tai', 'dong']
        },
        {
            id: '713200',
            name: '澎湖',
            fullname: '澎湖县',
            pinyin: ['peng', 'hu']
        }
    ],
    //------------------------------------------------------------------------------------

    [
        {
            id: '811100',
            name: '中西区',
            fullname: '中西区',
            pinyin: ['zhong', 'xi', 'qu']
        },
        {
            id: '811200',
            name: '湾仔区',
            fullname: '湾仔区',
            pinyin: ['wan', 'zi', 'qu']
        },
        {
            id: '811300',
            name: '东区',
            fullname: '东区',
            pinyin: ['dong', 'qu']
        },
        {
            id: '811400',
            name: '南区',
            fullname: '南区',
            pinyin: ['nan', 'qu']
        },
        {
            id: '812100',
            name: '油尖旺区',
            fullname: '油尖旺区',
            pinyin: ['you', 'jian', 'wang', 'qu']
        },
        {
            id: '812200',
            name: '深水埗区',
            fullname: '深水埗区',
            pinyin: ['shen', 'shui', 'bu', 'qu']
        },
        {
            id: '812300',
            name: '九龙',
            fullname: '九龙城区',
            pinyin: ['jiu', 'long']
        },
        {
            id: '812400',
            name: '黄大仙区',
            fullname: '黄大仙区',
            pinyin: ['huang', 'da', 'xian', 'qu']
        },
        {
            id: '812500',
            name: '观塘区',
            fullname: '观塘区',
            pinyin: ['guan', 'tang', 'qu']
        },
        {
            id: '813100',
            name: '葵青区',
            fullname: '葵青区',
            pinyin: ['kui', 'qing', 'qu']
        },
        {
            id: '813200',
            name: '荃湾区',
            fullname: '荃湾区',
            pinyin: ['quan', 'wan', 'qu']
        },
        {
            id: '813300',
            name: '屯门区',
            fullname: '屯门区',
            pinyin: ['tun', 'men', 'qu']
        },
        {
            id: '813400',
            name: '元朗区',
            fullname: '元朗区',
            pinyin: ['yuan', 'lang', 'qu']
        },
        {
            id: '813500',
            name: '北区',
            fullname: '北区',
            pinyin: ['bei', 'qu']
        },
        {
            id: '813600',
            name: '大埔区',
            fullname: '大埔区',
            pinyin: ['da', 'pu', 'qu']
        },
        {
            id: '813700',
            name: '沙田区',
            fullname: '沙田区',
            pinyin: ['sha', 'tian', 'qu']
        },
        {
            id: '813800',
            name: '西贡区',
            fullname: '西贡区',
            pinyin: ['xi', 'gong', 'qu']
        },
        {
            id: '813900',
            name: '离岛区',
            fullname: '离岛区',
            pinyin: ['li', 'dao', 'qu']
        }
    ],
    //------------------------------------------------------------------------------------

    [
        {
            id: '820100',
            name: '澳门半岛',
            fullname: '澳门半岛',
            pinyin: ['ao', 'men', 'ban', 'dao']
        },
        {
            id: '820200',
            name: '氹仔岛',
            fullname: '氹仔岛',
            pinyin: ['dang', 'zi', 'dao']
        },
        {
            id: '820300',
            name: '路环岛',
            fullname: '路环岛',
            pinyin: ['lu', 'huan', 'dao']
        },
        {
            id: '820400',
            name: '路氹城',
            fullname: '路氹城',
            pinyin: ['lu', 'dang', 'cheng']
        }
    ]
];
const countyDistrict = [
    [
        [
            {
                id: '130102',
                fullname: '长安区'
            },
            {
                id: '130104',
                fullname: '桥西区'
            },
            {
                id: '130105',
                fullname: '新华区'
            },
            {
                id: '130107',
                fullname: '井陉矿区'
            },
            {
                id: '130108',
                fullname: '裕华区'
            },
            {
                id: '130109',
                fullname: '藁城区'
            },
            {
                id: '130110',
                fullname: '鹿泉区'
            },
            {
                id: '130111',
                fullname: '栾城区'
            },
            {
                id: '130121',
                fullname: '井陉县'
            },
            {
                id: '130123',
                fullname: '正定县'
            },
            {
                id: '130125',
                fullname: '行唐县'
            },
            {
                id: '130126',
                fullname: '灵寿县'
            },
            {
                id: '130127',
                fullname: '高邑县'
            },
            {
                id: '130128',
                fullname: '深泽县'
            },
            {
                id: '130129',
                fullname: '赞皇县'
            },
            {
                id: '130130',
                fullname: '无极县'
            },
            {
                id: '130131',
                fullname: '平山县'
            },
            {
                id: '130132',
                fullname: '元氏县'
            },
            {
                id: '130133',
                fullname: '赵县'
            },
            {
                id: '130181',
                fullname: '辛集市'
            },
            {
                id: '130183',
                fullname: '晋州市'
            },
            {
                id: '130184',
                fullname: '新乐市'
            }
        ],
        [
            {
                id: '130202',
                fullname: '路南区'
            },
            {
                id: '130203',
                fullname: '路北区'
            },
            {
                id: '130204',
                fullname: '古冶区'
            },
            {
                id: '130205',
                fullname: '开平区'
            },
            {
                id: '130207',
                fullname: '丰南区'
            },
            {
                id: '130208',
                fullname: '丰润区'
            },
            {
                id: '130209',
                fullname: '曹妃甸区'
            },
            {
                id: '130224',
                fullname: '滦南县'
            },
            {
                id: '130225',
                fullname: '乐亭县'
            },
            {
                id: '130227',
                fullname: '迁西县'
            },
            {
                id: '130229',
                fullname: '玉田县'
            },
            {
                id: '130281',
                fullname: '遵化市'
            },
            {
                id: '130283',
                fullname: '迁安市'
            },
            {
                id: '130284',
                fullname: '滦州市'
            }
        ],
        [
            {
                id: '130302',
                fullname: '海港区'
            },
            {
                id: '130303',
                fullname: '山海关区'
            },
            {
                id: '130304',
                fullname: '北戴河区'
            },
            {
                id: '130306',
                fullname: '抚宁区'
            },
            {
                id: '130321',
                fullname: '青龙满族自治县'
            },
            {
                id: '130322',
                fullname: '昌黎县'
            },
            {
                id: '130324',
                fullname: '卢龙县'
            }
        ],
        [
            {
                id: '130402',
                fullname: '邯山区'
            },
            {
                id: '130403',
                fullname: '丛台区'
            },
            {
                id: '130404',
                fullname: '复兴区'
            },
            {
                id: '130406',
                fullname: '峰峰矿区'
            },
            {
                id: '130407',
                fullname: '肥乡区'
            },
            {
                id: '130408',
                fullname: '永年区'
            },
            {
                id: '130423',
                fullname: '临漳县'
            },
            {
                id: '130424',
                fullname: '成安县'
            },
            {
                id: '130425',
                fullname: '大名县'
            },
            {
                id: '130426',
                fullname: '涉县'
            },
            {
                id: '130427',
                fullname: '磁县'
            },
            {
                id: '130430',
                fullname: '邱县'
            },
            {
                id: '130431',
                fullname: '鸡泽县'
            },
            {
                id: '130432',
                fullname: '广平县'
            },
            {
                id: '130433',
                fullname: '馆陶县'
            },
            {
                id: '130434',
                fullname: '魏县'
            },
            {
                id: '130435',
                fullname: '曲周县'
            },
            {
                id: '130481',
                fullname: '武安市'
            }
        ],
        [
            {
                id: '130502',
                fullname: '襄都区'
            },
            {
                id: '130503',
                fullname: '信都区'
            },
            {
                id: '130505',
                fullname: '任泽区'
            },
            {
                id: '130506',
                fullname: '南和区'
            },
            {
                id: '130522',
                fullname: '临城县'
            },
            {
                id: '130523',
                fullname: '内丘县'
            },
            {
                id: '130524',
                fullname: '柏乡县'
            },
            {
                id: '130525',
                fullname: '隆尧县'
            },
            {
                id: '130528',
                fullname: '宁晋县'
            },
            {
                id: '130529',
                fullname: '巨鹿县'
            },
            {
                id: '130530',
                fullname: '新河县'
            },
            {
                id: '130531',
                fullname: '广宗县'
            },
            {
                id: '130532',
                fullname: '平乡县'
            },
            {
                id: '130533',
                fullname: '威县'
            },
            {
                id: '130534',
                fullname: '清河县'
            },
            {
                id: '130535',
                fullname: '临西县'
            },
            {
                id: '130581',
                fullname: '南宫市'
            },
            {
                id: '130582',
                fullname: '沙河市'
            }
        ],
        [
            {
                id: '130602',
                fullname: '竞秀区'
            },
            {
                id: '130606',
                fullname: '莲池区'
            },
            {
                id: '130607',
                fullname: '满城区'
            },
            {
                id: '130608',
                fullname: '清苑区'
            },
            {
                id: '130609',
                fullname: '徐水区'
            },
            {
                id: '130623',
                fullname: '涞水县'
            },
            {
                id: '130624',
                fullname: '阜平县'
            },
            {
                id: '130626',
                fullname: '定兴县'
            },
            {
                id: '130627',
                fullname: '唐县'
            },
            {
                id: '130628',
                fullname: '高阳县'
            },
            {
                id: '130629',
                fullname: '容城县'
            },
            {
                id: '130630',
                fullname: '涞源县'
            },
            {
                id: '130631',
                fullname: '望都县'
            },
            {
                id: '130632',
                fullname: '安新县'
            },
            {
                id: '130633',
                fullname: '易县'
            },
            {
                id: '130634',
                fullname: '曲阳县'
            },
            {
                id: '130635',
                fullname: '蠡县'
            },
            {
                id: '130636',
                fullname: '顺平县'
            },
            {
                id: '130637',
                fullname: '博野县'
            },
            {
                id: '130638',
                fullname: '雄县'
            },
            {
                id: '130681',
                fullname: '涿州市'
            },
            {
                id: '130682',
                fullname: '定州市'
            },
            {
                id: '130683',
                fullname: '安国市'
            },
            {
                id: '130684',
                fullname: '高碑店市'
            }
        ],
        [
            {
                id: '130702',
                fullname: '桥东区'
            },
            {
                id: '130703',
                fullname: '桥西区'
            },
            {
                id: '130705',
                fullname: '宣化区'
            },
            {
                id: '130706',
                fullname: '下花园区'
            },
            {
                id: '130708',
                fullname: '万全区'
            },
            {
                id: '130709',
                fullname: '崇礼区'
            },
            {
                id: '130722',
                fullname: '张北县'
            },
            {
                id: '130723',
                fullname: '康保县'
            },
            {
                id: '130724',
                fullname: '沽源县'
            },
            {
                id: '130725',
                fullname: '尚义县'
            },
            {
                id: '130726',
                fullname: '蔚县'
            },
            {
                id: '130727',
                fullname: '阳原县'
            },
            {
                id: '130728',
                fullname: '怀安县'
            },
            {
                id: '130730',
                fullname: '怀来县'
            },
            {
                id: '130731',
                fullname: '涿鹿县'
            },
            {
                id: '130732',
                fullname: '赤城县'
            }
        ],
        [
            {
                id: '130802',
                fullname: '双桥区'
            },
            {
                id: '130803',
                fullname: '双滦区'
            },
            {
                id: '130804',
                fullname: '鹰手营子矿区'
            },
            {
                id: '130821',
                fullname: '承德县'
            },
            {
                id: '130822',
                fullname: '兴隆县'
            },
            {
                id: '130824',
                fullname: '滦平县'
            },
            {
                id: '130825',
                fullname: '隆化县'
            },
            {
                id: '130826',
                fullname: '丰宁满族自治县'
            },
            {
                id: '130827',
                fullname: '宽城满族自治县'
            },
            {
                id: '130828',
                fullname: '围场满族蒙古族自治县'
            },
            {
                id: '130881',
                fullname: '平泉市'
            }
        ],
        [
            {
                id: '130902',
                fullname: '新华区'
            },
            {
                id: '130903',
                fullname: '运河区'
            },
            {
                id: '130921',
                fullname: '沧县'
            },
            {
                id: '130922',
                fullname: '青县'
            },
            {
                id: '130923',
                fullname: '东光县'
            },
            {
                id: '130924',
                fullname: '海兴县'
            },
            {
                id: '130925',
                fullname: '盐山县'
            },
            {
                id: '130926',
                fullname: '肃宁县'
            },
            {
                id: '130927',
                fullname: '南皮县'
            },
            {
                id: '130928',
                fullname: '吴桥县'
            },
            {
                id: '130929',
                fullname: '献县'
            },
            {
                id: '130930',
                fullname: '孟村回族自治县'
            },
            {
                id: '130981',
                fullname: '泊头市'
            },
            {
                id: '130982',
                fullname: '任丘市'
            },
            {
                id: '130983',
                fullname: '黄骅市'
            },
            {
                id: '130984',
                fullname: '河间市'
            }
        ],
        [
            {
                id: '131002',
                fullname: '安次区'
            },
            {
                id: '131003',
                fullname: '广阳区'
            },
            {
                id: '131022',
                fullname: '固安县'
            },
            {
                id: '131023',
                fullname: '永清县'
            },
            {
                id: '131024',
                fullname: '香河县'
            },
            {
                id: '131025',
                fullname: '大城县'
            },
            {
                id: '131026',
                fullname: '文安县'
            },
            {
                id: '131028',
                fullname: '大厂回族自治县'
            },
            {
                id: '131081',
                fullname: '霸州市'
            },
            {
                id: '131082',
                fullname: '三河市'
            }
        ],
        [
            {
                id: '131102',
                fullname: '桃城区'
            },
            {
                id: '131103',
                fullname: '冀州区'
            },
            {
                id: '131121',
                fullname: '枣强县'
            },
            {
                id: '131122',
                fullname: '武邑县'
            },
            {
                id: '131123',
                fullname: '武强县'
            },
            {
                id: '131124',
                fullname: '饶阳县'
            },
            {
                id: '131125',
                fullname: '安平县'
            },
            {
                id: '131126',
                fullname: '故城县'
            },
            {
                id: '131127',
                fullname: '景县'
            },
            {
                id: '131128',
                fullname: '阜城县'
            },
            {
                id: '131182',
                fullname: '深州市'
            }
        ]
    ],
    [
        [
            {
                id: '140105',
                fullname: '小店区'
            },
            {
                id: '140106',
                fullname: '迎泽区'
            },
            {
                id: '140107',
                fullname: '杏花岭区'
            },
            {
                id: '140108',
                fullname: '尖草坪区'
            },
            {
                id: '140109',
                fullname: '万柏林区'
            },
            {
                id: '140110',
                fullname: '晋源区'
            },
            {
                id: '140121',
                fullname: '清徐县'
            },
            {
                id: '140122',
                fullname: '阳曲县'
            },
            {
                id: '140123',
                fullname: '娄烦县'
            },
            {
                id: '140181',
                fullname: '古交市'
            }
        ],
        [
            {
                id: '140212',
                fullname: '新荣区'
            },
            {
                id: '140213',
                fullname: '平城区'
            },
            {
                id: '140214',
                fullname: '云冈区'
            },
            {
                id: '140215',
                fullname: '云州区'
            },
            {
                id: '140221',
                fullname: '阳高县'
            },
            {
                id: '140222',
                fullname: '天镇县'
            },
            {
                id: '140223',
                fullname: '广灵县'
            },
            {
                id: '140224',
                fullname: '灵丘县'
            },
            {
                id: '140225',
                fullname: '浑源县'
            },
            {
                id: '140226',
                fullname: '左云县'
            }
        ],
        [
            {
                id: '140302',
                fullname: '城区'
            },
            {
                id: '140303',
                fullname: '矿区'
            },
            {
                id: '140311',
                fullname: '郊区'
            },
            {
                id: '140321',
                fullname: '平定县'
            },
            {
                id: '140322',
                fullname: '盂县'
            }
        ],
        [
            {
                id: '140403',
                fullname: '潞州区'
            },
            {
                id: '140404',
                fullname: '上党区'
            },
            {
                id: '140405',
                fullname: '屯留区'
            },
            {
                id: '140406',
                fullname: '潞城区'
            },
            {
                id: '140423',
                fullname: '襄垣县'
            },
            {
                id: '140425',
                fullname: '平顺县'
            },
            {
                id: '140426',
                fullname: '黎城县'
            },
            {
                id: '140427',
                fullname: '壶关县'
            },
            {
                id: '140428',
                fullname: '长子县'
            },
            {
                id: '140429',
                fullname: '武乡县'
            },
            {
                id: '140430',
                fullname: '沁县'
            },
            {
                id: '140431',
                fullname: '沁源县'
            }
        ],
        [
            {
                id: '140502',
                fullname: '城区'
            },
            {
                id: '140521',
                fullname: '沁水县'
            },
            {
                id: '140522',
                fullname: '阳城县'
            },
            {
                id: '140524',
                fullname: '陵川县'
            },
            {
                id: '140525',
                fullname: '泽州县'
            },
            {
                id: '140581',
                fullname: '高平市'
            }
        ],
        [
            {
                id: '140602',
                fullname: '朔城区'
            },
            {
                id: '140603',
                fullname: '平鲁区'
            },
            {
                id: '140621',
                fullname: '山阴县'
            },
            {
                id: '140622',
                fullname: '应县'
            },
            {
                id: '140623',
                fullname: '右玉县'
            },
            {
                id: '140681',
                fullname: '怀仁市'
            }
        ],
        [
            {
                id: '140702',
                fullname: '榆次区'
            },
            {
                id: '140703',
                fullname: '太谷区'
            },
            {
                id: '140721',
                fullname: '榆社县'
            },
            {
                id: '140722',
                fullname: '左权县'
            },
            {
                id: '140723',
                fullname: '和顺县'
            },
            {
                id: '140724',
                fullname: '昔阳县'
            },
            {
                id: '140725',
                fullname: '寿阳县'
            },
            {
                id: '140727',
                fullname: '祁县'
            },
            {
                id: '140728',
                fullname: '平遥县'
            },
            {
                id: '140729',
                fullname: '灵石县'
            },
            {
                id: '140781',
                fullname: '介休市'
            }
        ],
        [
            {
                id: '140802',
                fullname: '盐湖区'
            },
            {
                id: '140821',
                fullname: '临猗县'
            },
            {
                id: '140822',
                fullname: '万荣县'
            },
            {
                id: '140823',
                fullname: '闻喜县'
            },
            {
                id: '140824',
                fullname: '稷山县'
            },
            {
                id: '140825',
                fullname: '新绛县'
            },
            {
                id: '140826',
                fullname: '绛县'
            },
            {
                id: '140827',
                fullname: '垣曲县'
            },
            {
                id: '140828',
                fullname: '夏县'
            },
            {
                id: '140829',
                fullname: '平陆县'
            },
            {
                id: '140830',
                fullname: '芮城县'
            },
            {
                id: '140881',
                fullname: '永济市'
            },
            {
                id: '140882',
                fullname: '河津市'
            }
        ],
        [
            {
                id: '140902',
                fullname: '忻府区'
            },
            {
                id: '140921',
                fullname: '定襄县'
            },
            {
                id: '140922',
                fullname: '五台县'
            },
            {
                id: '140923',
                fullname: '代县'
            },
            {
                id: '140924',
                fullname: '繁峙县'
            },
            {
                id: '140925',
                fullname: '宁武县'
            },
            {
                id: '140926',
                fullname: '静乐县'
            },
            {
                id: '140927',
                fullname: '神池县'
            },
            {
                id: '140928',
                fullname: '五寨县'
            },
            {
                id: '140929',
                fullname: '岢岚县'
            },
            {
                id: '140930',
                fullname: '河曲县'
            },
            {
                id: '140931',
                fullname: '保德县'
            },
            {
                id: '140932',
                fullname: '偏关县'
            },
            {
                id: '140981',
                fullname: '原平市'
            }
        ],
        [
            {
                id: '141002',
                fullname: '尧都区'
            },
            {
                id: '141021',
                fullname: '曲沃县'
            },
            {
                id: '141022',
                fullname: '翼城县'
            },
            {
                id: '141023',
                fullname: '襄汾县'
            },
            {
                id: '141024',
                fullname: '洪洞县'
            },
            {
                id: '141025',
                fullname: '古县'
            },
            {
                id: '141026',
                fullname: '安泽县'
            },
            {
                id: '141027',
                fullname: '浮山县'
            },
            {
                id: '141028',
                fullname: '吉县'
            },
            {
                id: '141029',
                fullname: '乡宁县'
            },
            {
                id: '141030',
                fullname: '大宁县'
            },
            {
                id: '141031',
                fullname: '隰县'
            },
            {
                id: '141032',
                fullname: '永和县'
            },
            {
                id: '141033',
                fullname: '蒲县'
            },
            {
                id: '141034',
                fullname: '汾西县'
            },
            {
                id: '141081',
                fullname: '侯马市'
            },
            {
                id: '141082',
                fullname: '霍州市'
            }
        ],
        [
            {
                id: '141102',
                fullname: '离石区'
            },
            {
                id: '141121',
                fullname: '文水县'
            },
            {
                id: '141122',
                fullname: '交城县'
            },
            {
                id: '141123',
                fullname: '兴县'
            },
            {
                id: '141124',
                fullname: '临县'
            },
            {
                id: '141125',
                fullname: '柳林县'
            },
            {
                id: '141126',
                fullname: '石楼县'
            },
            {
                id: '141127',
                fullname: '岚县'
            },
            {
                id: '141128',
                fullname: '方山县'
            },
            {
                id: '141129',
                fullname: '中阳县'
            },
            {
                id: '141130',
                fullname: '交口县'
            },
            {
                id: '141181',
                fullname: '孝义市'
            },
            {
                id: '141182',
                fullname: '汾阳市'
            }
        ]
    ],
    [
        [
            {
                id: '150102',
                fullname: '新城区'
            },
            {
                id: '150103',
                fullname: '回民区'
            },
            {
                id: '150104',
                fullname: '玉泉区'
            },
            {
                id: '150105',
                fullname: '赛罕区'
            },
            {
                id: '150121',
                fullname: '土默特左旗'
            },
            {
                id: '150122',
                fullname: '托克托县'
            },
            {
                id: '150123',
                fullname: '和林格尔县'
            },
            {
                id: '150124',
                fullname: '清水河县'
            },
            {
                id: '150125',
                fullname: '武川县'
            }
        ],
        [
            {
                id: '150202',
                fullname: '东河区'
            },
            {
                id: '150203',
                fullname: '昆都仑区'
            },
            {
                id: '150204',
                fullname: '青山区'
            },
            {
                id: '150205',
                fullname: '石拐区'
            },
            {
                id: '150206',
                fullname: '白云鄂博矿区'
            },
            {
                id: '150207',
                fullname: '九原区'
            },
            {
                id: '150221',
                fullname: '土默特右旗'
            },
            {
                id: '150222',
                fullname: '固阳县'
            },
            {
                id: '150223',
                fullname: '达尔罕茂明安联合旗'
            }
        ],
        [
            {
                id: '150302',
                fullname: '海勃湾区'
            },
            {
                id: '150303',
                fullname: '海南区'
            },
            {
                id: '150304',
                fullname: '乌达区'
            }
        ],
        [
            {
                id: '150402',
                fullname: '红山区'
            },
            {
                id: '150403',
                fullname: '元宝山区'
            },
            {
                id: '150404',
                fullname: '松山区'
            },
            {
                id: '150421',
                fullname: '阿鲁科尔沁旗'
            },
            {
                id: '150422',
                fullname: '巴林左旗'
            },
            {
                id: '150423',
                fullname: '巴林右旗'
            },
            {
                id: '150424',
                fullname: '林西县'
            },
            {
                id: '150425',
                fullname: '克什克腾旗'
            },
            {
                id: '150426',
                fullname: '翁牛特旗'
            },
            {
                id: '150428',
                fullname: '喀喇沁旗'
            },
            {
                id: '150429',
                fullname: '宁城县'
            },
            {
                id: '150430',
                fullname: '敖汉旗'
            }
        ],
        [
            {
                id: '150502',
                fullname: '科尔沁区'
            },
            {
                id: '150521',
                fullname: '科尔沁左翼中旗'
            },
            {
                id: '150522',
                fullname: '科尔沁左翼后旗'
            },
            {
                id: '150523',
                fullname: '开鲁县'
            },
            {
                id: '150524',
                fullname: '库伦旗'
            },
            {
                id: '150525',
                fullname: '奈曼旗'
            },
            {
                id: '150526',
                fullname: '扎鲁特旗'
            },
            {
                id: '150581',
                fullname: '霍林郭勒市'
            }
        ],
        [
            {
                id: '150602',
                fullname: '东胜区'
            },
            {
                id: '150603',
                fullname: '康巴什区'
            },
            {
                id: '150621',
                fullname: '达拉特旗'
            },
            {
                id: '150622',
                fullname: '准格尔旗'
            },
            {
                id: '150623',
                fullname: '鄂托克前旗'
            },
            {
                id: '150624',
                fullname: '鄂托克旗'
            },
            {
                id: '150625',
                fullname: '杭锦旗'
            },
            {
                id: '150626',
                fullname: '乌审旗'
            },
            {
                id: '150627',
                fullname: '伊金霍洛旗'
            }
        ],
        [
            {
                id: '150702',
                fullname: '海拉尔区'
            },
            {
                id: '150703',
                fullname: '扎赉诺尔区'
            },
            {
                id: '150721',
                fullname: '阿荣旗'
            },
            {
                id: '150722',
                fullname: '莫力达瓦达斡尔族自治旗'
            },
            {
                id: '150723',
                fullname: '鄂伦春自治旗'
            },
            {
                id: '150724',
                fullname: '鄂温克族自治旗'
            },
            {
                id: '150725',
                fullname: '陈巴尔虎旗'
            },
            {
                id: '150726',
                fullname: '新巴尔虎左旗'
            },
            {
                id: '150727',
                fullname: '新巴尔虎右旗'
            },
            {
                id: '150781',
                fullname: '满洲里市'
            },
            {
                id: '150782',
                fullname: '牙克石市'
            },
            {
                id: '150783',
                fullname: '扎兰屯市'
            },
            {
                id: '150784',
                fullname: '额尔古纳市'
            },
            {
                id: '150785',
                fullname: '根河市'
            }
        ],
        [
            {
                id: '150802',
                fullname: '临河区'
            },
            {
                id: '150821',
                fullname: '五原县'
            },
            {
                id: '150822',
                fullname: '磴口县'
            },
            {
                id: '150823',
                fullname: '乌拉特前旗'
            },
            {
                id: '150824',
                fullname: '乌拉特中旗'
            },
            {
                id: '150825',
                fullname: '乌拉特后旗'
            },
            {
                id: '150826',
                fullname: '杭锦后旗'
            }
        ],
        [
            {
                id: '150902',
                fullname: '集宁区'
            },
            {
                id: '150921',
                fullname: '卓资县'
            },
            {
                id: '150922',
                fullname: '化德县'
            },
            {
                id: '150923',
                fullname: '商都县'
            },
            {
                id: '150924',
                fullname: '兴和县'
            },
            {
                id: '150925',
                fullname: '凉城县'
            },
            {
                id: '150926',
                fullname: '察哈尔右翼前旗'
            },
            {
                id: '150927',
                fullname: '察哈尔右翼中旗'
            },
            {
                id: '150928',
                fullname: '察哈尔右翼后旗'
            },
            {
                id: '150929',
                fullname: '四子王旗'
            },
            {
                id: '150981',
                fullname: '丰镇市'
            }
        ],
        [
            {
                id: '152201',
                fullname: '乌兰浩特市'
            },
            {
                id: '152202',
                fullname: '阿尔山市'
            },
            {
                id: '152221',
                fullname: '科尔沁右翼前旗'
            },
            {
                id: '152222',
                fullname: '科尔沁右翼中旗'
            },
            {
                id: '152223',
                fullname: '扎赉特旗'
            },
            {
                id: '152224',
                fullname: '突泉县'
            }
        ],
        [
            {
                id: '152501',
                fullname: '二连浩特市'
            },
            {
                id: '152502',
                fullname: '锡林浩特市'
            },
            {
                id: '152522',
                fullname: '阿巴嘎旗'
            },
            {
                id: '152523',
                fullname: '苏尼特左旗'
            },
            {
                id: '152524',
                fullname: '苏尼特右旗'
            },
            {
                id: '152525',
                fullname: '东乌珠穆沁旗'
            },
            {
                id: '152526',
                fullname: '西乌珠穆沁旗'
            },
            {
                id: '152527',
                fullname: '太仆寺旗'
            },
            {
                id: '152528',
                fullname: '镶黄旗'
            },
            {
                id: '152529',
                fullname: '正镶白旗'
            },
            {
                id: '152530',
                fullname: '正蓝旗'
            },
            {
                id: '152531',
                fullname: '多伦县'
            }
        ],
        [
            {
                id: '152921',
                fullname: '阿拉善左旗'
            },
            {
                id: '152922',
                fullname: '阿拉善右旗'
            },
            {
                id: '152923',
                fullname: '额济纳旗'
            }
        ]
    ],
    [
        [
            {
                id: '210102',
                fullname: '和平区'
            },
            {
                id: '210103',
                fullname: '沈河区'
            },
            {
                id: '210104',
                fullname: '大东区'
            },
            {
                id: '210105',
                fullname: '皇姑区'
            },
            {
                id: '210106',
                fullname: '铁西区'
            },
            {
                id: '210111',
                fullname: '苏家屯区'
            },
            {
                id: '210112',
                fullname: '浑南区'
            },
            {
                id: '210113',
                fullname: '沈北新区'
            },
            {
                id: '210114',
                fullname: '于洪区'
            },
            {
                id: '210115',
                fullname: '辽中区'
            },
            {
                id: '210123',
                fullname: '康平县'
            },
            {
                id: '210124',
                fullname: '法库县'
            },
            {
                id: '210181',
                fullname: '新民市'
            }
        ],
        [
            {
                id: '210202',
                fullname: '中山区'
            },
            {
                id: '210203',
                fullname: '西岗区'
            },
            {
                id: '210204',
                fullname: '沙河口区'
            },
            {
                id: '210211',
                fullname: '甘井子区'
            },
            {
                id: '210212',
                fullname: '旅顺口区'
            },
            {
                id: '210213',
                fullname: '金州区'
            },
            {
                id: '210214',
                fullname: '普兰店区'
            },
            {
                id: '210224',
                fullname: '长海县'
            },
            {
                id: '210281',
                fullname: '瓦房店市'
            },
            {
                id: '210283',
                fullname: '庄河市'
            }
        ],
        [
            {
                id: '210302',
                fullname: '铁东区'
            },
            {
                id: '210303',
                fullname: '铁西区'
            },
            {
                id: '210304',
                fullname: '立山区'
            },
            {
                id: '210311',
                fullname: '千山区'
            },
            {
                id: '210321',
                fullname: '台安县'
            },
            {
                id: '210323',
                fullname: '岫岩满族自治县'
            },
            {
                id: '210381',
                fullname: '海城市'
            }
        ],
        [
            {
                id: '210402',
                fullname: '新抚区'
            },
            {
                id: '210403',
                fullname: '东洲区'
            },
            {
                id: '210404',
                fullname: '望花区'
            },
            {
                id: '210411',
                fullname: '顺城区'
            },
            {
                id: '210421',
                fullname: '抚顺县'
            },
            {
                id: '210422',
                fullname: '新宾满族自治县'
            },
            {
                id: '210423',
                fullname: '清原满族自治县'
            }
        ],
        [
            {
                id: '210502',
                fullname: '平山区'
            },
            {
                id: '210503',
                fullname: '溪湖区'
            },
            {
                id: '210504',
                fullname: '明山区'
            },
            {
                id: '210505',
                fullname: '南芬区'
            },
            {
                id: '210521',
                fullname: '本溪满族自治县'
            },
            {
                id: '210522',
                fullname: '桓仁满族自治县'
            }
        ],
        [
            {
                id: '210602',
                fullname: '元宝区'
            },
            {
                id: '210603',
                fullname: '振兴区'
            },
            {
                id: '210604',
                fullname: '振安区'
            },
            {
                id: '210624',
                fullname: '宽甸满族自治县'
            },
            {
                id: '210681',
                fullname: '东港市'
            },
            {
                id: '210682',
                fullname: '凤城市'
            }
        ],
        [
            {
                id: '210702',
                fullname: '古塔区'
            },
            {
                id: '210703',
                fullname: '凌河区'
            },
            {
                id: '210711',
                fullname: '太和区'
            },
            {
                id: '210726',
                fullname: '黑山县'
            },
            {
                id: '210727',
                fullname: '义县'
            },
            {
                id: '210781',
                fullname: '凌海市'
            },
            {
                id: '210782',
                fullname: '北镇市'
            }
        ],
        [
            {
                id: '210802',
                fullname: '站前区'
            },
            {
                id: '210803',
                fullname: '西市区'
            },
            {
                id: '210804',
                fullname: '鲅鱼圈区'
            },
            {
                id: '210811',
                fullname: '老边区'
            },
            {
                id: '210881',
                fullname: '盖州市'
            },
            {
                id: '210882',
                fullname: '大石桥市'
            }
        ],
        [
            {
                id: '210902',
                fullname: '海州区'
            },
            {
                id: '210903',
                fullname: '新邱区'
            },
            {
                id: '210904',
                fullname: '太平区'
            },
            {
                id: '210905',
                fullname: '清河门区'
            },
            {
                id: '210911',
                fullname: '细河区'
            },
            {
                id: '210921',
                fullname: '阜新蒙古族自治县'
            },
            {
                id: '210922',
                fullname: '彰武县'
            }
        ],
        [
            {
                id: '211002',
                fullname: '白塔区'
            },
            {
                id: '211003',
                fullname: '文圣区'
            },
            {
                id: '211004',
                fullname: '宏伟区'
            },
            {
                id: '211005',
                fullname: '弓长岭区'
            },
            {
                id: '211011',
                fullname: '太子河区'
            },
            {
                id: '211021',
                fullname: '辽阳县'
            },
            {
                id: '211081',
                fullname: '灯塔市'
            }
        ],
        [
            {
                id: '211102',
                fullname: '双台子区'
            },
            {
                id: '211103',
                fullname: '兴隆台区'
            },
            {
                id: '211104',
                fullname: '大洼区'
            },
            {
                id: '211122',
                fullname: '盘山县'
            }
        ],
        [
            {
                id: '211202',
                fullname: '银州区'
            },
            {
                id: '211204',
                fullname: '清河区'
            },
            {
                id: '211221',
                fullname: '铁岭县'
            },
            {
                id: '211223',
                fullname: '西丰县'
            },
            {
                id: '211224',
                fullname: '昌图县'
            },
            {
                id: '211281',
                fullname: '调兵山市'
            },
            {
                id: '211282',
                fullname: '开原市'
            }
        ],
        [
            {
                id: '211302',
                fullname: '双塔区'
            },
            {
                id: '211303',
                fullname: '龙城区'
            },
            {
                id: '211321',
                fullname: '朝阳县'
            },
            {
                id: '211322',
                fullname: '建平县'
            },
            {
                id: '211324',
                fullname: '喀喇沁左翼蒙古族自治县'
            },
            {
                id: '211381',
                fullname: '北票市'
            },
            {
                id: '211382',
                fullname: '凌源市'
            }
        ],
        [
            {
                id: '211402',
                fullname: '连山区'
            },
            {
                id: '211403',
                fullname: '龙港区'
            },
            {
                id: '211404',
                fullname: '南票区'
            },
            {
                id: '211421',
                fullname: '绥中县'
            },
            {
                id: '211422',
                fullname: '建昌县'
            },
            {
                id: '211481',
                fullname: '兴城市'
            }
        ]
    ],
    [
        [
            {
                id: '220102',
                fullname: '南关区'
            },
            {
                id: '220103',
                fullname: '宽城区'
            },
            {
                id: '220104',
                fullname: '朝阳区'
            },
            {
                id: '220105',
                fullname: '二道区'
            },
            {
                id: '220106',
                fullname: '绿园区'
            },
            {
                id: '220112',
                fullname: '双阳区'
            },
            {
                id: '220113',
                fullname: '九台区'
            },
            {
                id: '220122',
                fullname: '农安县'
            },
            {
                id: '220182',
                fullname: '榆树市'
            },
            {
                id: '220183',
                fullname: '德惠市'
            },
            {
                id: '220184',
                fullname: '公主岭市'
            }
        ],
        [
            {
                id: '220202',
                fullname: '昌邑区'
            },
            {
                id: '220203',
                fullname: '龙潭区'
            },
            {
                id: '220204',
                fullname: '船营区'
            },
            {
                id: '220211',
                fullname: '丰满区'
            },
            {
                id: '220221',
                fullname: '永吉县'
            },
            {
                id: '220281',
                fullname: '蛟河市'
            },
            {
                id: '220282',
                fullname: '桦甸市'
            },
            {
                id: '220283',
                fullname: '舒兰市'
            },
            {
                id: '220284',
                fullname: '磐石市'
            }
        ],
        [
            {
                id: '220302',
                fullname: '铁西区'
            },
            {
                id: '220303',
                fullname: '铁东区'
            },
            {
                id: '220322',
                fullname: '梨树县'
            },
            {
                id: '220323',
                fullname: '伊通满族自治县'
            },
            {
                id: '220382',
                fullname: '双辽市'
            }
        ],
        [
            {
                id: '220402',
                fullname: '龙山区'
            },
            {
                id: '220403',
                fullname: '西安区'
            },
            {
                id: '220421',
                fullname: '东丰县'
            },
            {
                id: '220422',
                fullname: '东辽县'
            }
        ],
        [
            {
                id: '220502',
                fullname: '东昌区'
            },
            {
                id: '220503',
                fullname: '二道江区'
            },
            {
                id: '220521',
                fullname: '通化县'
            },
            {
                id: '220523',
                fullname: '辉南县'
            },
            {
                id: '220524',
                fullname: '柳河县'
            },
            {
                id: '220581',
                fullname: '梅河口市'
            },
            {
                id: '220582',
                fullname: '集安市'
            }
        ],
        [
            {
                id: '220602',
                fullname: '浑江区'
            },
            {
                id: '220605',
                fullname: '江源区'
            },
            {
                id: '220621',
                fullname: '抚松县'
            },
            {
                id: '220622',
                fullname: '靖宇县'
            },
            {
                id: '220623',
                fullname: '长白朝鲜族自治县'
            },
            {
                id: '220681',
                fullname: '临江市'
            }
        ],
        [
            {
                id: '220702',
                fullname: '宁江区'
            },
            {
                id: '220721',
                fullname: '前郭尔罗斯蒙古族自治县'
            },
            {
                id: '220722',
                fullname: '长岭县'
            },
            {
                id: '220723',
                fullname: '乾安县'
            },
            {
                id: '220781',
                fullname: '扶余市'
            }
        ],
        [
            {
                id: '220802',
                fullname: '洮北区'
            },
            {
                id: '220821',
                fullname: '镇赉县'
            },
            {
                id: '220822',
                fullname: '通榆县'
            },
            {
                id: '220881',
                fullname: '洮南市'
            },
            {
                id: '220882',
                fullname: '大安市'
            }
        ],
        [
            {
                id: '222401',
                fullname: '延吉市'
            },
            {
                id: '222402',
                fullname: '图们市'
            },
            {
                id: '222403',
                fullname: '敦化市'
            },
            {
                id: '222404',
                fullname: '珲春市'
            },
            {
                id: '222405',
                fullname: '龙井市'
            },
            {
                id: '222406',
                fullname: '和龙市'
            },
            {
                id: '222424',
                fullname: '汪清县'
            },
            {
                id: '222426',
                fullname: '安图县'
            }
        ]
    ],
    [
        [
            {
                id: '230102',
                fullname: '道里区'
            },
            {
                id: '230103',
                fullname: '南岗区'
            },
            {
                id: '230104',
                fullname: '道外区'
            },
            {
                id: '230108',
                fullname: '平房区'
            },
            {
                id: '230109',
                fullname: '松北区'
            },
            {
                id: '230110',
                fullname: '香坊区'
            },
            {
                id: '230111',
                fullname: '呼兰区'
            },
            {
                id: '230112',
                fullname: '阿城区'
            },
            {
                id: '230113',
                fullname: '双城区'
            },
            {
                id: '230123',
                fullname: '依兰县'
            },
            {
                id: '230124',
                fullname: '方正县'
            },
            {
                id: '230125',
                fullname: '宾县'
            },
            {
                id: '230126',
                fullname: '巴彦县'
            },
            {
                id: '230127',
                fullname: '木兰县'
            },
            {
                id: '230128',
                fullname: '通河县'
            },
            {
                id: '230129',
                fullname: '延寿县'
            },
            {
                id: '230183',
                fullname: '尚志市'
            },
            {
                id: '230184',
                fullname: '五常市'
            }
        ],
        [
            {
                id: '230202',
                fullname: '龙沙区'
            },
            {
                id: '230203',
                fullname: '建华区'
            },
            {
                id: '230204',
                fullname: '铁锋区'
            },
            {
                id: '230205',
                fullname: '昂昂溪区'
            },
            {
                id: '230206',
                fullname: '富拉尔基区'
            },
            {
                id: '230207',
                fullname: '碾子山区'
            },
            {
                id: '230208',
                fullname: '梅里斯达斡尔族区'
            },
            {
                id: '230221',
                fullname: '龙江县'
            },
            {
                id: '230223',
                fullname: '依安县'
            },
            {
                id: '230224',
                fullname: '泰来县'
            },
            {
                id: '230225',
                fullname: '甘南县'
            },
            {
                id: '230227',
                fullname: '富裕县'
            },
            {
                id: '230229',
                fullname: '克山县'
            },
            {
                id: '230230',
                fullname: '克东县'
            },
            {
                id: '230231',
                fullname: '拜泉县'
            },
            {
                id: '230281',
                fullname: '讷河市'
            }
        ],
        [
            {
                id: '230302',
                fullname: '鸡冠区'
            },
            {
                id: '230303',
                fullname: '恒山区'
            },
            {
                id: '230304',
                fullname: '滴道区'
            },
            {
                id: '230305',
                fullname: '梨树区'
            },
            {
                id: '230306',
                fullname: '城子河区'
            },
            {
                id: '230307',
                fullname: '麻山区'
            },
            {
                id: '230321',
                fullname: '鸡东县'
            },
            {
                id: '230381',
                fullname: '虎林市'
            },
            {
                id: '230382',
                fullname: '密山市'
            }
        ],
        [
            {
                id: '230402',
                fullname: '向阳区'
            },
            {
                id: '230403',
                fullname: '工农区'
            },
            {
                id: '230404',
                fullname: '南山区'
            },
            {
                id: '230405',
                fullname: '兴安区'
            },
            {
                id: '230406',
                fullname: '东山区'
            },
            {
                id: '230407',
                fullname: '兴山区'
            },
            {
                id: '230421',
                fullname: '萝北县'
            },
            {
                id: '230422',
                fullname: '绥滨县'
            }
        ],
        [
            {
                id: '230502',
                fullname: '尖山区'
            },
            {
                id: '230503',
                fullname: '岭东区'
            },
            {
                id: '230505',
                fullname: '四方台区'
            },
            {
                id: '230506',
                fullname: '宝山区'
            },
            {
                id: '230521',
                fullname: '集贤县'
            },
            {
                id: '230522',
                fullname: '友谊县'
            },
            {
                id: '230523',
                fullname: '宝清县'
            },
            {
                id: '230524',
                fullname: '饶河县'
            }
        ],
        [
            {
                id: '230602',
                fullname: '萨尔图区'
            },
            {
                id: '230603',
                fullname: '龙凤区'
            },
            {
                id: '230604',
                fullname: '让胡路区'
            },
            {
                id: '230605',
                fullname: '红岗区'
            },
            {
                id: '230606',
                fullname: '大同区'
            },
            {
                id: '230621',
                fullname: '肇州县'
            },
            {
                id: '230622',
                fullname: '肇源县'
            },
            {
                id: '230623',
                fullname: '林甸县'
            },
            {
                id: '230624',
                fullname: '杜尔伯特蒙古族自治县'
            }
        ],
        [
            {
                id: '230717',
                fullname: '伊美区'
            },
            {
                id: '230718',
                fullname: '乌翠区'
            },
            {
                id: '230719',
                fullname: '友好区'
            },
            {
                id: '230722',
                fullname: '嘉荫县'
            },
            {
                id: '230723',
                fullname: '汤旺县'
            },
            {
                id: '230724',
                fullname: '丰林县'
            },
            {
                id: '230725',
                fullname: '大箐山县'
            },
            {
                id: '230726',
                fullname: '南岔县'
            },
            {
                id: '230751',
                fullname: '金林区'
            },
            {
                id: '230781',
                fullname: '铁力市'
            }
        ],
        [
            {
                id: '230803',
                fullname: '向阳区'
            },
            {
                id: '230804',
                fullname: '前进区'
            },
            {
                id: '230805',
                fullname: '东风区'
            },
            {
                id: '230811',
                fullname: '郊区'
            },
            {
                id: '230822',
                fullname: '桦南县'
            },
            {
                id: '230826',
                fullname: '桦川县'
            },
            {
                id: '230828',
                fullname: '汤原县'
            },
            {
                id: '230881',
                fullname: '同江市'
            },
            {
                id: '230882',
                fullname: '富锦市'
            },
            {
                id: '230883',
                fullname: '抚远市'
            }
        ],
        [
            {
                id: '230902',
                fullname: '新兴区'
            },
            {
                id: '230903',
                fullname: '桃山区'
            },
            {
                id: '230904',
                fullname: '茄子河区'
            },
            {
                id: '230921',
                fullname: '勃利县'
            }
        ],
        [
            {
                id: '231002',
                fullname: '东安区'
            },
            {
                id: '231003',
                fullname: '阳明区'
            },
            {
                id: '231004',
                fullname: '爱民区'
            },
            {
                id: '231005',
                fullname: '西安区'
            },
            {
                id: '231025',
                fullname: '林口县'
            },
            {
                id: '231081',
                fullname: '绥芬河市'
            },
            {
                id: '231083',
                fullname: '海林市'
            },
            {
                id: '231084',
                fullname: '宁安市'
            },
            {
                id: '231085',
                fullname: '穆棱市'
            },
            {
                id: '231086',
                fullname: '东宁市'
            }
        ],
        [
            {
                id: '231102',
                fullname: '爱辉区'
            },
            {
                id: '231123',
                fullname: '逊克县'
            },
            {
                id: '231124',
                fullname: '孙吴县'
            },
            {
                id: '231181',
                fullname: '北安市'
            },
            {
                id: '231182',
                fullname: '五大连池市'
            },
            {
                id: '231183',
                fullname: '嫩江市'
            }
        ],
        [
            {
                id: '231202',
                fullname: '北林区'
            },
            {
                id: '231221',
                fullname: '望奎县'
            },
            {
                id: '231222',
                fullname: '兰西县'
            },
            {
                id: '231223',
                fullname: '青冈县'
            },
            {
                id: '231224',
                fullname: '庆安县'
            },
            {
                id: '231225',
                fullname: '明水县'
            },
            {
                id: '231226',
                fullname: '绥棱县'
            },
            {
                id: '231281',
                fullname: '安达市'
            },
            {
                id: '231282',
                fullname: '肇东市'
            },
            {
                id: '231283',
                fullname: '海伦市'
            }
        ],
        [
            {
                id: '232701',
                fullname: '漠河市'
            },
            {
                id: '232718',
                fullname: '加格达奇区'
            },
            {
                id: '232721',
                fullname: '呼玛县'
            },
            {
                id: '232722',
                fullname: '塔河县'
            }
        ]
    ],
    [
        [
            {
                id: '320102',
                fullname: '玄武区'
            },
            {
                id: '320104',
                fullname: '秦淮区'
            },
            {
                id: '320105',
                fullname: '建邺区'
            },
            {
                id: '320106',
                fullname: '鼓楼区'
            },
            {
                id: '320111',
                fullname: '浦口区'
            },
            {
                id: '320113',
                fullname: '栖霞区'
            },
            {
                id: '320114',
                fullname: '雨花台区'
            },
            {
                id: '320115',
                fullname: '江宁区'
            },
            {
                id: '320116',
                fullname: '六合区'
            },
            {
                id: '320117',
                fullname: '溧水区'
            },
            {
                id: '320118',
                fullname: '高淳区'
            }
        ],
        [
            {
                id: '320205',
                fullname: '锡山区'
            },
            {
                id: '320206',
                fullname: '惠山区'
            },
            {
                id: '320211',
                fullname: '滨湖区'
            },
            {
                id: '320213',
                fullname: '梁溪区'
            },
            {
                id: '320214',
                fullname: '新吴区'
            },
            {
                id: '320281',
                fullname: '江阴市'
            },
            {
                id: '320282',
                fullname: '宜兴市'
            }
        ],
        [
            {
                id: '320302',
                fullname: '鼓楼区'
            },
            {
                id: '320303',
                fullname: '云龙区'
            },
            {
                id: '320305',
                fullname: '贾汪区'
            },
            {
                id: '320311',
                fullname: '泉山区'
            },
            {
                id: '320312',
                fullname: '铜山区'
            },
            {
                id: '320321',
                fullname: '丰县'
            },
            {
                id: '320322',
                fullname: '沛县'
            },
            {
                id: '320324',
                fullname: '睢宁县'
            },
            {
                id: '320381',
                fullname: '新沂市'
            },
            {
                id: '320382',
                fullname: '邳州市'
            }
        ],
        [
            {
                id: '320402',
                fullname: '天宁区'
            },
            {
                id: '320404',
                fullname: '钟楼区'
            },
            {
                id: '320411',
                fullname: '新北区'
            },
            {
                id: '320412',
                fullname: '武进区'
            },
            {
                id: '320413',
                fullname: '金坛区'
            },
            {
                id: '320481',
                fullname: '溧阳市'
            }
        ],
        [
            {
                id: '320505',
                fullname: '虎丘区'
            },
            {
                id: '320506',
                fullname: '吴中区'
            },
            {
                id: '320507',
                fullname: '相城区'
            },
            {
                id: '320508',
                fullname: '姑苏区'
            },
            {
                id: '320509',
                fullname: '吴江区'
            },
            {
                id: '320571',
                fullname: '苏州工业园区'
            },
            {
                id: '320581',
                fullname: '常熟市'
            },
            {
                id: '320582',
                fullname: '张家港市'
            },
            {
                id: '320583',
                fullname: '昆山市'
            },
            {
                id: '320585',
                fullname: '太仓市'
            }
        ],
        [
            {
                id: '320612',
                fullname: '通州区'
            },
            {
                id: '320613',
                fullname: '崇川区'
            },
            {
                id: '320614',
                fullname: '海门区'
            },
            {
                id: '320623',
                fullname: '如东县'
            },
            {
                id: '320681',
                fullname: '启东市'
            },
            {
                id: '320682',
                fullname: '如皋市'
            },
            {
                id: '320685',
                fullname: '海安市'
            }
        ],
        [
            {
                id: '320703',
                fullname: '连云区'
            },
            {
                id: '320706',
                fullname: '海州区'
            },
            {
                id: '320707',
                fullname: '赣榆区'
            },
            {
                id: '320722',
                fullname: '东海县'
            },
            {
                id: '320723',
                fullname: '灌云县'
            },
            {
                id: '320724',
                fullname: '灌南县'
            }
        ],
        [
            {
                id: '320803',
                fullname: '淮安区'
            },
            {
                id: '320804',
                fullname: '淮阴区'
            },
            {
                id: '320812',
                fullname: '清江浦区'
            },
            {
                id: '320813',
                fullname: '洪泽区'
            },
            {
                id: '320826',
                fullname: '涟水县'
            },
            {
                id: '320830',
                fullname: '盱眙县'
            },
            {
                id: '320831',
                fullname: '金湖县'
            }
        ],
        [
            {
                id: '320902',
                fullname: '亭湖区'
            },
            {
                id: '320903',
                fullname: '盐都区'
            },
            {
                id: '320904',
                fullname: '大丰区'
            },
            {
                id: '320921',
                fullname: '响水县'
            },
            {
                id: '320922',
                fullname: '滨海县'
            },
            {
                id: '320923',
                fullname: '阜宁县'
            },
            {
                id: '320924',
                fullname: '射阳县'
            },
            {
                id: '320925',
                fullname: '建湖县'
            },
            {
                id: '320981',
                fullname: '东台市'
            }
        ],
        [
            {
                id: '321002',
                fullname: '广陵区'
            },
            {
                id: '321003',
                fullname: '邗江区'
            },
            {
                id: '321012',
                fullname: '江都区'
            },
            {
                id: '321023',
                fullname: '宝应县'
            },
            {
                id: '321081',
                fullname: '仪征市'
            },
            {
                id: '321084',
                fullname: '高邮市'
            }
        ],
        [
            {
                id: '321102',
                fullname: '京口区'
            },
            {
                id: '321111',
                fullname: '润州区'
            },
            {
                id: '321112',
                fullname: '丹徒区'
            },
            {
                id: '321181',
                fullname: '丹阳市'
            },
            {
                id: '321182',
                fullname: '扬中市'
            },
            {
                id: '321183',
                fullname: '句容市'
            }
        ],
        [
            {
                id: '321202',
                fullname: '海陵区'
            },
            {
                id: '321203',
                fullname: '高港区'
            },
            {
                id: '321204',
                fullname: '姜堰区'
            },
            {
                id: '321281',
                fullname: '兴化市'
            },
            {
                id: '321282',
                fullname: '靖江市'
            },
            {
                id: '321283',
                fullname: '泰兴市'
            }
        ],
        [
            {
                id: '321302',
                fullname: '宿城区'
            },
            {
                id: '321311',
                fullname: '宿豫区'
            },
            {
                id: '321322',
                fullname: '沭阳县'
            },
            {
                id: '321323',
                fullname: '泗阳县'
            },
            {
                id: '321324',
                fullname: '泗洪县'
            }
        ]
    ],
    [
        [
            {
                id: '330102',
                fullname: '上城区'
            },
            {
                id: '330105',
                fullname: '拱墅区'
            },
            {
                id: '330106',
                fullname: '西湖区'
            },
            {
                id: '330108',
                fullname: '滨江区'
            },
            {
                id: '330109',
                fullname: '萧山区'
            },
            {
                id: '330110',
                fullname: '余杭区'
            },
            {
                id: '330111',
                fullname: '富阳区'
            },
            {
                id: '330112',
                fullname: '临安区'
            },
            {
                id: '330113',
                fullname: '临平区'
            },
            {
                id: '330114',
                fullname: '钱塘区'
            },
            {
                id: '330122',
                fullname: '桐庐县'
            },
            {
                id: '330127',
                fullname: '淳安县'
            },
            {
                id: '330182',
                fullname: '建德市'
            }
        ],
        [
            {
                id: '330203',
                fullname: '海曙区'
            },
            {
                id: '330205',
                fullname: '江北区'
            },
            {
                id: '330206',
                fullname: '北仑区'
            },
            {
                id: '330211',
                fullname: '镇海区'
            },
            {
                id: '330212',
                fullname: '鄞州区'
            },
            {
                id: '330213',
                fullname: '奉化区'
            },
            {
                id: '330225',
                fullname: '象山县'
            },
            {
                id: '330226',
                fullname: '宁海县'
            },
            {
                id: '330281',
                fullname: '余姚市'
            },
            {
                id: '330282',
                fullname: '慈溪市'
            }
        ],
        [
            {
                id: '330302',
                fullname: '鹿城区'
            },
            {
                id: '330303',
                fullname: '龙湾区'
            },
            {
                id: '330304',
                fullname: '瓯海区'
            },
            {
                id: '330305',
                fullname: '洞头区'
            },
            {
                id: '330324',
                fullname: '永嘉县'
            },
            {
                id: '330326',
                fullname: '平阳县'
            },
            {
                id: '330327',
                fullname: '苍南县'
            },
            {
                id: '330328',
                fullname: '文成县'
            },
            {
                id: '330329',
                fullname: '泰顺县'
            },
            {
                id: '330381',
                fullname: '瑞安市'
            },
            {
                id: '330382',
                fullname: '乐清市'
            },
            {
                id: '330383',
                fullname: '龙港市'
            }
        ],
        [
            {
                id: '330402',
                fullname: '南湖区'
            },
            {
                id: '330411',
                fullname: '秀洲区'
            },
            {
                id: '330421',
                fullname: '嘉善县'
            },
            {
                id: '330424',
                fullname: '海盐县'
            },
            {
                id: '330481',
                fullname: '海宁市'
            },
            {
                id: '330482',
                fullname: '平湖市'
            },
            {
                id: '330483',
                fullname: '桐乡市'
            }
        ],
        [
            {
                id: '330502',
                fullname: '吴兴区'
            },
            {
                id: '330503',
                fullname: '南浔区'
            },
            {
                id: '330521',
                fullname: '德清县'
            },
            {
                id: '330522',
                fullname: '长兴县'
            },
            {
                id: '330523',
                fullname: '安吉县'
            }
        ],
        [
            {
                id: '330602',
                fullname: '越城区'
            },
            {
                id: '330603',
                fullname: '柯桥区'
            },
            {
                id: '330604',
                fullname: '上虞区'
            },
            {
                id: '330624',
                fullname: '新昌县'
            },
            {
                id: '330681',
                fullname: '诸暨市'
            },
            {
                id: '330683',
                fullname: '嵊州市'
            }
        ],
        [
            {
                id: '330702',
                fullname: '婺城区'
            },
            {
                id: '330703',
                fullname: '金东区'
            },
            {
                id: '330723',
                fullname: '武义县'
            },
            {
                id: '330726',
                fullname: '浦江县'
            },
            {
                id: '330727',
                fullname: '磐安县'
            },
            {
                id: '330781',
                fullname: '兰溪市'
            },
            {
                id: '330782',
                fullname: '义乌市'
            },
            {
                id: '330783',
                fullname: '东阳市'
            },
            {
                id: '330784',
                fullname: '永康市'
            }
        ],
        [
            {
                id: '330802',
                fullname: '柯城区'
            },
            {
                id: '330803',
                fullname: '衢江区'
            },
            {
                id: '330822',
                fullname: '常山县'
            },
            {
                id: '330824',
                fullname: '开化县'
            },
            {
                id: '330825',
                fullname: '龙游县'
            },
            {
                id: '330881',
                fullname: '江山市'
            }
        ],
        [
            {
                id: '330902',
                fullname: '定海区'
            },
            {
                id: '330903',
                fullname: '普陀区'
            },
            {
                id: '330921',
                fullname: '岱山县'
            },
            {
                id: '330922',
                fullname: '嵊泗县'
            }
        ],
        [
            {
                id: '331002',
                fullname: '椒江区'
            },
            {
                id: '331003',
                fullname: '黄岩区'
            },
            {
                id: '331004',
                fullname: '路桥区'
            },
            {
                id: '331022',
                fullname: '三门县'
            },
            {
                id: '331023',
                fullname: '天台县'
            },
            {
                id: '331024',
                fullname: '仙居县'
            },
            {
                id: '331081',
                fullname: '温岭市'
            },
            {
                id: '331082',
                fullname: '临海市'
            },
            {
                id: '331083',
                fullname: '玉环市'
            }
        ],
        [
            {
                id: '331102',
                fullname: '莲都区'
            },
            {
                id: '331121',
                fullname: '青田县'
            },
            {
                id: '331122',
                fullname: '缙云县'
            },
            {
                id: '331123',
                fullname: '遂昌县'
            },
            {
                id: '331124',
                fullname: '松阳县'
            },
            {
                id: '331125',
                fullname: '云和县'
            },
            {
                id: '331126',
                fullname: '庆元县'
            },
            {
                id: '331127',
                fullname: '景宁畲族自治县'
            },
            {
                id: '331181',
                fullname: '龙泉市'
            }
        ]
    ],
    [
        [
            {
                id: '340102',
                fullname: '瑶海区'
            },
            {
                id: '340103',
                fullname: '庐阳区'
            },
            {
                id: '340104',
                fullname: '蜀山区'
            },
            {
                id: '340111',
                fullname: '包河区'
            },
            {
                id: '340121',
                fullname: '长丰县'
            },
            {
                id: '340122',
                fullname: '肥东县'
            },
            {
                id: '340123',
                fullname: '肥西县'
            },
            {
                id: '340124',
                fullname: '庐江县'
            },
            {
                id: '340181',
                fullname: '巢湖市'
            }
        ],
        [
            {
                id: '340202',
                fullname: '镜湖区'
            },
            {
                id: '340207',
                fullname: '鸠江区'
            },
            {
                id: '340209',
                fullname: '弋江区'
            },
            {
                id: '340210',
                fullname: '湾沚区'
            },
            {
                id: '340212',
                fullname: '繁昌区'
            },
            {
                id: '340223',
                fullname: '南陵县'
            },
            {
                id: '340281',
                fullname: '无为市'
            }
        ],
        [
            {
                id: '340302',
                fullname: '龙子湖区'
            },
            {
                id: '340303',
                fullname: '蚌山区'
            },
            {
                id: '340304',
                fullname: '禹会区'
            },
            {
                id: '340311',
                fullname: '淮上区'
            },
            {
                id: '340321',
                fullname: '怀远县'
            },
            {
                id: '340322',
                fullname: '五河县'
            },
            {
                id: '340323',
                fullname: '固镇县'
            }
        ],
        [
            {
                id: '340402',
                fullname: '大通区'
            },
            {
                id: '340403',
                fullname: '田家庵区'
            },
            {
                id: '340404',
                fullname: '谢家集区'
            },
            {
                id: '340405',
                fullname: '八公山区'
            },
            {
                id: '340406',
                fullname: '潘集区'
            },
            {
                id: '340421',
                fullname: '凤台县'
            },
            {
                id: '340422',
                fullname: '寿县'
            }
        ],
        [
            {
                id: '340503',
                fullname: '花山区'
            },
            {
                id: '340504',
                fullname: '雨山区'
            },
            {
                id: '340506',
                fullname: '博望区'
            },
            {
                id: '340521',
                fullname: '当涂县'
            },
            {
                id: '340522',
                fullname: '含山县'
            },
            {
                id: '340523',
                fullname: '和县'
            }
        ],
        [
            {
                id: '340602',
                fullname: '杜集区'
            },
            {
                id: '340603',
                fullname: '相山区'
            },
            {
                id: '340604',
                fullname: '烈山区'
            },
            {
                id: '340621',
                fullname: '濉溪县'
            }
        ],
        [
            {
                id: '340705',
                fullname: '铜官区'
            },
            {
                id: '340706',
                fullname: '义安区'
            },
            {
                id: '340711',
                fullname: '郊区'
            },
            {
                id: '340722',
                fullname: '枞阳县'
            }
        ],
        [
            {
                id: '340802',
                fullname: '迎江区'
            },
            {
                id: '340803',
                fullname: '大观区'
            },
            {
                id: '340811',
                fullname: '宜秀区'
            },
            {
                id: '340822',
                fullname: '怀宁县'
            },
            {
                id: '340825',
                fullname: '太湖县'
            },
            {
                id: '340826',
                fullname: '宿松县'
            },
            {
                id: '340827',
                fullname: '望江县'
            },
            {
                id: '340828',
                fullname: '岳西县'
            },
            {
                id: '340881',
                fullname: '桐城市'
            },
            {
                id: '340882',
                fullname: '潜山市'
            }
        ],
        [
            {
                id: '341002',
                fullname: '屯溪区'
            },
            {
                id: '341003',
                fullname: '黄山区'
            },
            {
                id: '341004',
                fullname: '徽州区'
            },
            {
                id: '341021',
                fullname: '歙县'
            },
            {
                id: '341022',
                fullname: '休宁县'
            },
            {
                id: '341023',
                fullname: '黟县'
            },
            {
                id: '341024',
                fullname: '祁门县'
            }
        ],
        [
            {
                id: '341102',
                fullname: '琅琊区'
            },
            {
                id: '341103',
                fullname: '南谯区'
            },
            {
                id: '341122',
                fullname: '来安县'
            },
            {
                id: '341124',
                fullname: '全椒县'
            },
            {
                id: '341125',
                fullname: '定远县'
            },
            {
                id: '341126',
                fullname: '凤阳县'
            },
            {
                id: '341181',
                fullname: '天长市'
            },
            {
                id: '341182',
                fullname: '明光市'
            }
        ],
        [
            {
                id: '341202',
                fullname: '颍州区'
            },
            {
                id: '341203',
                fullname: '颍东区'
            },
            {
                id: '341204',
                fullname: '颍泉区'
            },
            {
                id: '341221',
                fullname: '临泉县'
            },
            {
                id: '341222',
                fullname: '太和县'
            },
            {
                id: '341225',
                fullname: '阜南县'
            },
            {
                id: '341226',
                fullname: '颍上县'
            },
            {
                id: '341282',
                fullname: '界首市'
            }
        ],
        [
            {
                id: '341302',
                fullname: '埇桥区'
            },
            {
                id: '341321',
                fullname: '砀山县'
            },
            {
                id: '341322',
                fullname: '萧县'
            },
            {
                id: '341323',
                fullname: '灵璧县'
            },
            {
                id: '341324',
                fullname: '泗县'
            }
        ],
        [
            {
                id: '341502',
                fullname: '金安区'
            },
            {
                id: '341503',
                fullname: '裕安区'
            },
            {
                id: '341504',
                fullname: '叶集区'
            },
            {
                id: '341522',
                fullname: '霍邱县'
            },
            {
                id: '341523',
                fullname: '舒城县'
            },
            {
                id: '341524',
                fullname: '金寨县'
            },
            {
                id: '341525',
                fullname: '霍山县'
            }
        ],
        [
            {
                id: '341602',
                fullname: '谯城区'
            },
            {
                id: '341621',
                fullname: '涡阳县'
            },
            {
                id: '341622',
                fullname: '蒙城县'
            },
            {
                id: '341623',
                fullname: '利辛县'
            }
        ],
        [
            {
                id: '341702',
                fullname: '贵池区'
            },
            {
                id: '341721',
                fullname: '东至县'
            },
            {
                id: '341722',
                fullname: '石台县'
            },
            {
                id: '341723',
                fullname: '青阳县'
            }
        ],
        [
            {
                id: '341802',
                fullname: '宣州区'
            },
            {
                id: '341821',
                fullname: '郎溪县'
            },
            {
                id: '341823',
                fullname: '泾县'
            },
            {
                id: '341824',
                fullname: '绩溪县'
            },
            {
                id: '341825',
                fullname: '旌德县'
            },
            {
                id: '341881',
                fullname: '宁国市'
            },
            {
                id: '341882',
                fullname: '广德市'
            }
        ]
    ],
    [
        [
            {
                id: '350102',
                fullname: '鼓楼区'
            },
            {
                id: '350103',
                fullname: '台江区'
            },
            {
                id: '350104',
                fullname: '仓山区'
            },
            {
                id: '350105',
                fullname: '马尾区'
            },
            {
                id: '350111',
                fullname: '晋安区'
            },
            {
                id: '350112',
                fullname: '长乐区'
            },
            {
                id: '350121',
                fullname: '闽侯县'
            },
            {
                id: '350122',
                fullname: '连江县'
            },
            {
                id: '350123',
                fullname: '罗源县'
            },
            {
                id: '350124',
                fullname: '闽清县'
            },
            {
                id: '350125',
                fullname: '永泰县'
            },
            {
                id: '350128',
                fullname: '平潭县'
            },
            {
                id: '350181',
                fullname: '福清市'
            }
        ],
        [
            {
                id: '350203',
                fullname: '思明区'
            },
            {
                id: '350205',
                fullname: '海沧区'
            },
            {
                id: '350206',
                fullname: '湖里区'
            },
            {
                id: '350211',
                fullname: '集美区'
            },
            {
                id: '350212',
                fullname: '同安区'
            },
            {
                id: '350213',
                fullname: '翔安区'
            }
        ],
        [
            {
                id: '350302',
                fullname: '城厢区'
            },
            {
                id: '350303',
                fullname: '涵江区'
            },
            {
                id: '350304',
                fullname: '荔城区'
            },
            {
                id: '350305',
                fullname: '秀屿区'
            },
            {
                id: '350322',
                fullname: '仙游县'
            }
        ],
        [
            {
                id: '350404',
                fullname: '三元区'
            },
            {
                id: '350405',
                fullname: '沙县区'
            },
            {
                id: '350421',
                fullname: '明溪县'
            },
            {
                id: '350423',
                fullname: '清流县'
            },
            {
                id: '350424',
                fullname: '宁化县'
            },
            {
                id: '350425',
                fullname: '大田县'
            },
            {
                id: '350426',
                fullname: '尤溪县'
            },
            {
                id: '350428',
                fullname: '将乐县'
            },
            {
                id: '350429',
                fullname: '泰宁县'
            },
            {
                id: '350430',
                fullname: '建宁县'
            },
            {
                id: '350481',
                fullname: '永安市'
            }
        ],
        [
            {
                id: '350502',
                fullname: '鲤城区'
            },
            {
                id: '350503',
                fullname: '丰泽区'
            },
            {
                id: '350504',
                fullname: '洛江区'
            },
            {
                id: '350505',
                fullname: '泉港区'
            },
            {
                id: '350521',
                fullname: '惠安县'
            },
            {
                id: '350524',
                fullname: '安溪县'
            },
            {
                id: '350525',
                fullname: '永春县'
            },
            {
                id: '350526',
                fullname: '德化县'
            },
            {
                id: '350527',
                fullname: '金门县'
            },
            {
                id: '350581',
                fullname: '石狮市'
            },
            {
                id: '350582',
                fullname: '晋江市'
            },
            {
                id: '350583',
                fullname: '南安市'
            }
        ],
        [
            {
                id: '350602',
                fullname: '芗城区'
            },
            {
                id: '350603',
                fullname: '龙文区'
            },
            {
                id: '350604',
                fullname: '龙海区'
            },
            {
                id: '350605',
                fullname: '长泰区'
            },
            {
                id: '350622',
                fullname: '云霄县'
            },
            {
                id: '350623',
                fullname: '漳浦县'
            },
            {
                id: '350624',
                fullname: '诏安县'
            },
            {
                id: '350626',
                fullname: '东山县'
            },
            {
                id: '350627',
                fullname: '南靖县'
            },
            {
                id: '350628',
                fullname: '平和县'
            },
            {
                id: '350629',
                fullname: '华安县'
            }
        ],
        [
            {
                id: '350702',
                fullname: '延平区'
            },
            {
                id: '350703',
                fullname: '建阳区'
            },
            {
                id: '350721',
                fullname: '顺昌县'
            },
            {
                id: '350722',
                fullname: '浦城县'
            },
            {
                id: '350723',
                fullname: '光泽县'
            },
            {
                id: '350724',
                fullname: '松溪县'
            },
            {
                id: '350725',
                fullname: '政和县'
            },
            {
                id: '350781',
                fullname: '邵武市'
            },
            {
                id: '350782',
                fullname: '武夷山市'
            },
            {
                id: '350783',
                fullname: '建瓯市'
            }
        ],
        [
            {
                id: '350802',
                fullname: '新罗区'
            },
            {
                id: '350803',
                fullname: '永定区'
            },
            {
                id: '350821',
                fullname: '长汀县'
            },
            {
                id: '350823',
                fullname: '上杭县'
            },
            {
                id: '350824',
                fullname: '武平县'
            },
            {
                id: '350825',
                fullname: '连城县'
            },
            {
                id: '350881',
                fullname: '漳平市'
            }
        ],
        [
            {
                id: '350902',
                fullname: '蕉城区'
            },
            {
                id: '350921',
                fullname: '霞浦县'
            },
            {
                id: '350922',
                fullname: '古田县'
            },
            {
                id: '350923',
                fullname: '屏南县'
            },
            {
                id: '350924',
                fullname: '寿宁县'
            },
            {
                id: '350925',
                fullname: '周宁县'
            },
            {
                id: '350926',
                fullname: '柘荣县'
            },
            {
                id: '350981',
                fullname: '福安市'
            },
            {
                id: '350982',
                fullname: '福鼎市'
            }
        ]
    ],
    [
        [
            {
                id: '360102',
                fullname: '东湖区'
            },
            {
                id: '360103',
                fullname: '西湖区'
            },
            {
                id: '360104',
                fullname: '青云谱区'
            },
            {
                id: '360111',
                fullname: '青山湖区'
            },
            {
                id: '360112',
                fullname: '新建区'
            },
            {
                id: '360113',
                fullname: '红谷滩区'
            },
            {
                id: '360121',
                fullname: '南昌县'
            },
            {
                id: '360123',
                fullname: '安义县'
            },
            {
                id: '360124',
                fullname: '进贤县'
            }
        ],
        [
            {
                id: '360202',
                fullname: '昌江区'
            },
            {
                id: '360203',
                fullname: '珠山区'
            },
            {
                id: '360222',
                fullname: '浮梁县'
            },
            {
                id: '360281',
                fullname: '乐平市'
            }
        ],
        [
            {
                id: '360302',
                fullname: '安源区'
            },
            {
                id: '360313',
                fullname: '湘东区'
            },
            {
                id: '360321',
                fullname: '莲花县'
            },
            {
                id: '360322',
                fullname: '上栗县'
            },
            {
                id: '360323',
                fullname: '芦溪县'
            }
        ],
        [
            {
                id: '360402',
                fullname: '濂溪区'
            },
            {
                id: '360403',
                fullname: '浔阳区'
            },
            {
                id: '360404',
                fullname: '柴桑区'
            },
            {
                id: '360423',
                fullname: '武宁县'
            },
            {
                id: '360424',
                fullname: '修水县'
            },
            {
                id: '360425',
                fullname: '永修县'
            },
            {
                id: '360426',
                fullname: '德安县'
            },
            {
                id: '360428',
                fullname: '都昌县'
            },
            {
                id: '360429',
                fullname: '湖口县'
            },
            {
                id: '360430',
                fullname: '彭泽县'
            },
            {
                id: '360481',
                fullname: '瑞昌市'
            },
            {
                id: '360482',
                fullname: '共青城市'
            },
            {
                id: '360483',
                fullname: '庐山市'
            }
        ],
        [
            {
                id: '360502',
                fullname: '渝水区'
            },
            {
                id: '360521',
                fullname: '分宜县'
            }
        ],
        [
            {
                id: '360602',
                fullname: '月湖区'
            },
            {
                id: '360603',
                fullname: '余江区'
            },
            {
                id: '360681',
                fullname: '贵溪市'
            }
        ],
        [
            {
                id: '360702',
                fullname: '章贡区'
            },
            {
                id: '360703',
                fullname: '南康区'
            },
            {
                id: '360704',
                fullname: '赣县区'
            },
            {
                id: '360722',
                fullname: '信丰县'
            },
            {
                id: '360723',
                fullname: '大余县'
            },
            {
                id: '360724',
                fullname: '上犹县'
            },
            {
                id: '360725',
                fullname: '崇义县'
            },
            {
                id: '360726',
                fullname: '安远县'
            },
            {
                id: '360728',
                fullname: '定南县'
            },
            {
                id: '360729',
                fullname: '全南县'
            },
            {
                id: '360730',
                fullname: '宁都县'
            },
            {
                id: '360731',
                fullname: '于都县'
            },
            {
                id: '360732',
                fullname: '兴国县'
            },
            {
                id: '360733',
                fullname: '会昌县'
            },
            {
                id: '360734',
                fullname: '寻乌县'
            },
            {
                id: '360735',
                fullname: '石城县'
            },
            {
                id: '360781',
                fullname: '瑞金市'
            },
            {
                id: '360783',
                fullname: '龙南市'
            }
        ],
        [
            {
                id: '360802',
                fullname: '吉州区'
            },
            {
                id: '360803',
                fullname: '青原区'
            },
            {
                id: '360821',
                fullname: '吉安县'
            },
            {
                id: '360822',
                fullname: '吉水县'
            },
            {
                id: '360823',
                fullname: '峡江县'
            },
            {
                id: '360824',
                fullname: '新干县'
            },
            {
                id: '360825',
                fullname: '永丰县'
            },
            {
                id: '360826',
                fullname: '泰和县'
            },
            {
                id: '360827',
                fullname: '遂川县'
            },
            {
                id: '360828',
                fullname: '万安县'
            },
            {
                id: '360829',
                fullname: '安福县'
            },
            {
                id: '360830',
                fullname: '永新县'
            },
            {
                id: '360881',
                fullname: '井冈山市'
            }
        ],
        [
            {
                id: '360902',
                fullname: '袁州区'
            },
            {
                id: '360921',
                fullname: '奉新县'
            },
            {
                id: '360922',
                fullname: '万载县'
            },
            {
                id: '360923',
                fullname: '上高县'
            },
            {
                id: '360924',
                fullname: '宜丰县'
            },
            {
                id: '360925',
                fullname: '靖安县'
            },
            {
                id: '360926',
                fullname: '铜鼓县'
            },
            {
                id: '360981',
                fullname: '丰城市'
            },
            {
                id: '360982',
                fullname: '樟树市'
            },
            {
                id: '360983',
                fullname: '高安市'
            }
        ],
        [
            {
                id: '361002',
                fullname: '临川区'
            },
            {
                id: '361003',
                fullname: '东乡区'
            },
            {
                id: '361021',
                fullname: '南城县'
            },
            {
                id: '361022',
                fullname: '黎川县'
            },
            {
                id: '361023',
                fullname: '南丰县'
            },
            {
                id: '361024',
                fullname: '崇仁县'
            },
            {
                id: '361025',
                fullname: '乐安县'
            },
            {
                id: '361026',
                fullname: '宜黄县'
            },
            {
                id: '361027',
                fullname: '金溪县'
            },
            {
                id: '361028',
                fullname: '资溪县'
            },
            {
                id: '361030',
                fullname: '广昌县'
            }
        ],
        [
            {
                id: '361102',
                fullname: '信州区'
            },
            {
                id: '361103',
                fullname: '广丰区'
            },
            {
                id: '361104',
                fullname: '广信区'
            },
            {
                id: '361123',
                fullname: '玉山县'
            },
            {
                id: '361124',
                fullname: '铅山县'
            },
            {
                id: '361125',
                fullname: '横峰县'
            },
            {
                id: '361126',
                fullname: '弋阳县'
            },
            {
                id: '361127',
                fullname: '余干县'
            },
            {
                id: '361128',
                fullname: '鄱阳县'
            },
            {
                id: '361129',
                fullname: '万年县'
            },
            {
                id: '361130',
                fullname: '婺源县'
            },
            {
                id: '361181',
                fullname: '德兴市'
            }
        ]
    ],
    [
        [
            {
                id: '370102',
                fullname: '历下区'
            },
            {
                id: '370103',
                fullname: '市中区'
            },
            {
                id: '370104',
                fullname: '槐荫区'
            },
            {
                id: '370105',
                fullname: '天桥区'
            },
            {
                id: '370112',
                fullname: '历城区'
            },
            {
                id: '370113',
                fullname: '长清区'
            },
            {
                id: '370114',
                fullname: '章丘区'
            },
            {
                id: '370115',
                fullname: '济阳区'
            },
            {
                id: '370116',
                fullname: '莱芜区'
            },
            {
                id: '370117',
                fullname: '钢城区'
            },
            {
                id: '370124',
                fullname: '平阴县'
            },
            {
                id: '370126',
                fullname: '商河县'
            }
        ],
        [
            {
                id: '370202',
                fullname: '市南区'
            },
            {
                id: '370203',
                fullname: '市北区'
            },
            {
                id: '370211',
                fullname: '黄岛区'
            },
            {
                id: '370212',
                fullname: '崂山区'
            },
            {
                id: '370213',
                fullname: '李沧区'
            },
            {
                id: '370214',
                fullname: '城阳区'
            },
            {
                id: '370215',
                fullname: '即墨区'
            },
            {
                id: '370281',
                fullname: '胶州市'
            },
            {
                id: '370283',
                fullname: '平度市'
            },
            {
                id: '370285',
                fullname: '莱西市'
            }
        ],
        [
            {
                id: '370302',
                fullname: '淄川区'
            },
            {
                id: '370303',
                fullname: '张店区'
            },
            {
                id: '370304',
                fullname: '博山区'
            },
            {
                id: '370305',
                fullname: '临淄区'
            },
            {
                id: '370306',
                fullname: '周村区'
            },
            {
                id: '370321',
                fullname: '桓台县'
            },
            {
                id: '370322',
                fullname: '高青县'
            },
            {
                id: '370323',
                fullname: '沂源县'
            }
        ],
        [
            {
                id: '370402',
                fullname: '市中区'
            },
            {
                id: '370403',
                fullname: '薛城区'
            },
            {
                id: '370404',
                fullname: '峄城区'
            },
            {
                id: '370405',
                fullname: '台儿庄区'
            },
            {
                id: '370406',
                fullname: '山亭区'
            },
            {
                id: '370481',
                fullname: '滕州市'
            }
        ],
        [
            {
                id: '370502',
                fullname: '东营区'
            },
            {
                id: '370503',
                fullname: '河口区'
            },
            {
                id: '370505',
                fullname: '垦利区'
            },
            {
                id: '370522',
                fullname: '利津县'
            },
            {
                id: '370523',
                fullname: '广饶县'
            }
        ],
        [
            {
                id: '370602',
                fullname: '芝罘区'
            },
            {
                id: '370611',
                fullname: '福山区'
            },
            {
                id: '370612',
                fullname: '牟平区'
            },
            {
                id: '370613',
                fullname: '莱山区'
            },
            {
                id: '370614',
                fullname: '蓬莱区'
            },
            {
                id: '370681',
                fullname: '龙口市'
            },
            {
                id: '370682',
                fullname: '莱阳市'
            },
            {
                id: '370683',
                fullname: '莱州市'
            },
            {
                id: '370685',
                fullname: '招远市'
            },
            {
                id: '370686',
                fullname: '栖霞市'
            },
            {
                id: '370687',
                fullname: '海阳市'
            }
        ],
        [
            {
                id: '370702',
                fullname: '潍城区'
            },
            {
                id: '370703',
                fullname: '寒亭区'
            },
            {
                id: '370704',
                fullname: '坊子区'
            },
            {
                id: '370705',
                fullname: '奎文区'
            },
            {
                id: '370724',
                fullname: '临朐县'
            },
            {
                id: '370725',
                fullname: '昌乐县'
            },
            {
                id: '370781',
                fullname: '青州市'
            },
            {
                id: '370782',
                fullname: '诸城市'
            },
            {
                id: '370783',
                fullname: '寿光市'
            },
            {
                id: '370784',
                fullname: '安丘市'
            },
            {
                id: '370785',
                fullname: '高密市'
            },
            {
                id: '370786',
                fullname: '昌邑市'
            }
        ],
        [
            {
                id: '370811',
                fullname: '任城区'
            },
            {
                id: '370812',
                fullname: '兖州区'
            },
            {
                id: '370826',
                fullname: '微山县'
            },
            {
                id: '370827',
                fullname: '鱼台县'
            },
            {
                id: '370828',
                fullname: '金乡县'
            },
            {
                id: '370829',
                fullname: '嘉祥县'
            },
            {
                id: '370830',
                fullname: '汶上县'
            },
            {
                id: '370831',
                fullname: '泗水县'
            },
            {
                id: '370832',
                fullname: '梁山县'
            },
            {
                id: '370881',
                fullname: '曲阜市'
            },
            {
                id: '370883',
                fullname: '邹城市'
            }
        ],
        [
            {
                id: '370902',
                fullname: '泰山区'
            },
            {
                id: '370911',
                fullname: '岱岳区'
            },
            {
                id: '370921',
                fullname: '宁阳县'
            },
            {
                id: '370923',
                fullname: '东平县'
            },
            {
                id: '370982',
                fullname: '新泰市'
            },
            {
                id: '370983',
                fullname: '肥城市'
            }
        ],
        [
            {
                id: '371002',
                fullname: '环翠区'
            },
            {
                id: '371003',
                fullname: '文登区'
            },
            {
                id: '371082',
                fullname: '荣成市'
            },
            {
                id: '371083',
                fullname: '乳山市'
            }
        ],
        [
            {
                id: '371102',
                fullname: '东港区'
            },
            {
                id: '371103',
                fullname: '岚山区'
            },
            {
                id: '371121',
                fullname: '五莲县'
            },
            {
                id: '371122',
                fullname: '莒县'
            }
        ],
        [
            {
                id: '371302',
                fullname: '兰山区'
            },
            {
                id: '371311',
                fullname: '罗庄区'
            },
            {
                id: '371312',
                fullname: '河东区'
            },
            {
                id: '371321',
                fullname: '沂南县'
            },
            {
                id: '371322',
                fullname: '郯城县'
            },
            {
                id: '371323',
                fullname: '沂水县'
            },
            {
                id: '371324',
                fullname: '兰陵县'
            },
            {
                id: '371325',
                fullname: '费县'
            },
            {
                id: '371326',
                fullname: '平邑县'
            },
            {
                id: '371327',
                fullname: '莒南县'
            },
            {
                id: '371328',
                fullname: '蒙阴县'
            },
            {
                id: '371329',
                fullname: '临沭县'
            }
        ],
        [
            {
                id: '371402',
                fullname: '德城区'
            },
            {
                id: '371403',
                fullname: '陵城区'
            },
            {
                id: '371422',
                fullname: '宁津县'
            },
            {
                id: '371423',
                fullname: '庆云县'
            },
            {
                id: '371424',
                fullname: '临邑县'
            },
            {
                id: '371425',
                fullname: '齐河县'
            },
            {
                id: '371426',
                fullname: '平原县'
            },
            {
                id: '371427',
                fullname: '夏津县'
            },
            {
                id: '371428',
                fullname: '武城县'
            },
            {
                id: '371481',
                fullname: '乐陵市'
            },
            {
                id: '371482',
                fullname: '禹城市'
            }
        ],
        [
            {
                id: '371502',
                fullname: '东昌府区'
            },
            {
                id: '371503',
                fullname: '茌平区'
            },
            {
                id: '371521',
                fullname: '阳谷县'
            },
            {
                id: '371522',
                fullname: '莘县'
            },
            {
                id: '371524',
                fullname: '东阿县'
            },
            {
                id: '371525',
                fullname: '冠县'
            },
            {
                id: '371526',
                fullname: '高唐县'
            },
            {
                id: '371581',
                fullname: '临清市'
            }
        ],
        [
            {
                id: '371602',
                fullname: '滨城区'
            },
            {
                id: '371603',
                fullname: '沾化区'
            },
            {
                id: '371621',
                fullname: '惠民县'
            },
            {
                id: '371622',
                fullname: '阳信县'
            },
            {
                id: '371623',
                fullname: '无棣县'
            },
            {
                id: '371625',
                fullname: '博兴县'
            },
            {
                id: '371681',
                fullname: '邹平市'
            }
        ],
        [
            {
                id: '371702',
                fullname: '牡丹区'
            },
            {
                id: '371703',
                fullname: '定陶区'
            },
            {
                id: '371721',
                fullname: '曹县'
            },
            {
                id: '371722',
                fullname: '单县'
            },
            {
                id: '371723',
                fullname: '成武县'
            },
            {
                id: '371724',
                fullname: '巨野县'
            },
            {
                id: '371725',
                fullname: '郓城县'
            },
            {
                id: '371726',
                fullname: '鄄城县'
            },
            {
                id: '371728',
                fullname: '东明县'
            }
        ]
    ],
    [
        [
            {
                id: '410102',
                fullname: '中原区'
            },
            {
                id: '410103',
                fullname: '二七区'
            },
            {
                id: '410104',
                fullname: '管城回族区'
            },
            {
                id: '410105',
                fullname: '金水区'
            },
            {
                id: '410106',
                fullname: '上街区'
            },
            {
                id: '410108',
                fullname: '惠济区'
            },
            {
                id: '410122',
                fullname: '中牟县'
            },
            {
                id: '410181',
                fullname: '巩义市'
            },
            {
                id: '410182',
                fullname: '荥阳市'
            },
            {
                id: '410183',
                fullname: '新密市'
            },
            {
                id: '410184',
                fullname: '新郑市'
            },
            {
                id: '410185',
                fullname: '登封市'
            }
        ],
        [
            {
                id: '410202',
                fullname: '龙亭区'
            },
            {
                id: '410203',
                fullname: '顺河回族区'
            },
            {
                id: '410204',
                fullname: '鼓楼区'
            },
            {
                id: '410205',
                fullname: '禹王台区'
            },
            {
                id: '410212',
                fullname: '祥符区'
            },
            {
                id: '410221',
                fullname: '杞县'
            },
            {
                id: '410222',
                fullname: '通许县'
            },
            {
                id: '410223',
                fullname: '尉氏县'
            },
            {
                id: '410225',
                fullname: '兰考县'
            }
        ],
        [
            {
                id: '410302',
                fullname: '老城区'
            },
            {
                id: '410303',
                fullname: '西工区'
            },
            {
                id: '410304',
                fullname: '瀍河回族区'
            },
            {
                id: '410305',
                fullname: '涧西区'
            },
            {
                id: '410307',
                fullname: '偃师区'
            },
            {
                id: '410308',
                fullname: '孟津区'
            },
            {
                id: '410311',
                fullname: '洛龙区'
            },
            {
                id: '410323',
                fullname: '新安县'
            },
            {
                id: '410324',
                fullname: '栾川县'
            },
            {
                id: '410325',
                fullname: '嵩县'
            },
            {
                id: '410326',
                fullname: '汝阳县'
            },
            {
                id: '410327',
                fullname: '宜阳县'
            },
            {
                id: '410328',
                fullname: '洛宁县'
            },
            {
                id: '410329',
                fullname: '伊川县'
            }
        ],
        [
            {
                id: '410402',
                fullname: '新华区'
            },
            {
                id: '410403',
                fullname: '卫东区'
            },
            {
                id: '410404',
                fullname: '石龙区'
            },
            {
                id: '410411',
                fullname: '湛河区'
            },
            {
                id: '410421',
                fullname: '宝丰县'
            },
            {
                id: '410422',
                fullname: '叶县'
            },
            {
                id: '410423',
                fullname: '鲁山县'
            },
            {
                id: '410425',
                fullname: '郏县'
            },
            {
                id: '410481',
                fullname: '舞钢市'
            },
            {
                id: '410482',
                fullname: '汝州市'
            }
        ],
        [
            {
                id: '410502',
                fullname: '文峰区'
            },
            {
                id: '410503',
                fullname: '北关区'
            },
            {
                id: '410505',
                fullname: '殷都区'
            },
            {
                id: '410506',
                fullname: '龙安区'
            },
            {
                id: '410522',
                fullname: '安阳县'
            },
            {
                id: '410523',
                fullname: '汤阴县'
            },
            {
                id: '410526',
                fullname: '滑县'
            },
            {
                id: '410527',
                fullname: '内黄县'
            },
            {
                id: '410581',
                fullname: '林州市'
            }
        ],
        [
            {
                id: '410602',
                fullname: '鹤山区'
            },
            {
                id: '410603',
                fullname: '山城区'
            },
            {
                id: '410611',
                fullname: '淇滨区'
            },
            {
                id: '410621',
                fullname: '浚县'
            },
            {
                id: '410622',
                fullname: '淇县'
            }
        ],
        [
            {
                id: '410702',
                fullname: '红旗区'
            },
            {
                id: '410703',
                fullname: '卫滨区'
            },
            {
                id: '410704',
                fullname: '凤泉区'
            },
            {
                id: '410711',
                fullname: '牧野区'
            },
            {
                id: '410721',
                fullname: '新乡县'
            },
            {
                id: '410724',
                fullname: '获嘉县'
            },
            {
                id: '410725',
                fullname: '原阳县'
            },
            {
                id: '410726',
                fullname: '延津县'
            },
            {
                id: '410727',
                fullname: '封丘县'
            },
            {
                id: '410781',
                fullname: '卫辉市'
            },
            {
                id: '410782',
                fullname: '辉县市'
            },
            {
                id: '410783',
                fullname: '长垣市'
            }
        ],
        [
            {
                id: '410802',
                fullname: '解放区'
            },
            {
                id: '410803',
                fullname: '中站区'
            },
            {
                id: '410804',
                fullname: '马村区'
            },
            {
                id: '410811',
                fullname: '山阳区'
            },
            {
                id: '410821',
                fullname: '修武县'
            },
            {
                id: '410822',
                fullname: '博爱县'
            },
            {
                id: '410823',
                fullname: '武陟县'
            },
            {
                id: '410825',
                fullname: '温县'
            },
            {
                id: '410882',
                fullname: '沁阳市'
            },
            {
                id: '410883',
                fullname: '孟州市'
            }
        ],
        [
            {
                id: '410902',
                fullname: '华龙区'
            },
            {
                id: '410922',
                fullname: '清丰县'
            },
            {
                id: '410923',
                fullname: '南乐县'
            },
            {
                id: '410926',
                fullname: '范县'
            },
            {
                id: '410927',
                fullname: '台前县'
            },
            {
                id: '410928',
                fullname: '濮阳县'
            }
        ],
        [
            {
                id: '411002',
                fullname: '魏都区'
            },
            {
                id: '411003',
                fullname: '建安区'
            },
            {
                id: '411024',
                fullname: '鄢陵县'
            },
            {
                id: '411025',
                fullname: '襄城县'
            },
            {
                id: '411081',
                fullname: '禹州市'
            },
            {
                id: '411082',
                fullname: '长葛市'
            }
        ],
        [
            {
                id: '411102',
                fullname: '源汇区'
            },
            {
                id: '411103',
                fullname: '郾城区'
            },
            {
                id: '411104',
                fullname: '召陵区'
            },
            {
                id: '411121',
                fullname: '舞阳县'
            },
            {
                id: '411122',
                fullname: '临颍县'
            }
        ],
        [
            {
                id: '411202',
                fullname: '湖滨区'
            },
            {
                id: '411203',
                fullname: '陕州区'
            },
            {
                id: '411221',
                fullname: '渑池县'
            },
            {
                id: '411224',
                fullname: '卢氏县'
            },
            {
                id: '411281',
                fullname: '义马市'
            },
            {
                id: '411282',
                fullname: '灵宝市'
            }
        ],
        [
            {
                id: '411302',
                fullname: '宛城区'
            },
            {
                id: '411303',
                fullname: '卧龙区'
            },
            {
                id: '411321',
                fullname: '南召县'
            },
            {
                id: '411322',
                fullname: '方城县'
            },
            {
                id: '411323',
                fullname: '西峡县'
            },
            {
                id: '411324',
                fullname: '镇平县'
            },
            {
                id: '411325',
                fullname: '内乡县'
            },
            {
                id: '411326',
                fullname: '淅川县'
            },
            {
                id: '411327',
                fullname: '社旗县'
            },
            {
                id: '411328',
                fullname: '唐河县'
            },
            {
                id: '411329',
                fullname: '新野县'
            },
            {
                id: '411330',
                fullname: '桐柏县'
            },
            {
                id: '411381',
                fullname: '邓州市'
            }
        ],
        [
            {
                id: '411402',
                fullname: '梁园区'
            },
            {
                id: '411403',
                fullname: '睢阳区'
            },
            {
                id: '411421',
                fullname: '民权县'
            },
            {
                id: '411422',
                fullname: '睢县'
            },
            {
                id: '411423',
                fullname: '宁陵县'
            },
            {
                id: '411424',
                fullname: '柘城县'
            },
            {
                id: '411425',
                fullname: '虞城县'
            },
            {
                id: '411426',
                fullname: '夏邑县'
            },
            {
                id: '411481',
                fullname: '永城市'
            }
        ],
        [
            {
                id: '411502',
                fullname: '浉河区'
            },
            {
                id: '411503',
                fullname: '平桥区'
            },
            {
                id: '411521',
                fullname: '罗山县'
            },
            {
                id: '411522',
                fullname: '光山县'
            },
            {
                id: '411523',
                fullname: '新县'
            },
            {
                id: '411524',
                fullname: '商城县'
            },
            {
                id: '411525',
                fullname: '固始县'
            },
            {
                id: '411526',
                fullname: '潢川县'
            },
            {
                id: '411527',
                fullname: '淮滨县'
            },
            {
                id: '411528',
                fullname: '息县'
            }
        ],
        [
            {
                id: '411602',
                fullname: '川汇区'
            },
            {
                id: '411603',
                fullname: '淮阳区'
            },
            {
                id: '411621',
                fullname: '扶沟县'
            },
            {
                id: '411622',
                fullname: '西华县'
            },
            {
                id: '411623',
                fullname: '商水县'
            },
            {
                id: '411624',
                fullname: '沈丘县'
            },
            {
                id: '411625',
                fullname: '郸城县'
            },
            {
                id: '411627',
                fullname: '太康县'
            },
            {
                id: '411628',
                fullname: '鹿邑县'
            },
            {
                id: '411681',
                fullname: '项城市'
            }
        ],
        [
            {
                id: '411702',
                fullname: '驿城区'
            },
            {
                id: '411721',
                fullname: '西平县'
            },
            {
                id: '411722',
                fullname: '上蔡县'
            },
            {
                id: '411723',
                fullname: '平舆县'
            },
            {
                id: '411724',
                fullname: '正阳县'
            },
            {
                id: '411725',
                fullname: '确山县'
            },
            {
                id: '411726',
                fullname: '泌阳县'
            },
            {
                id: '411727',
                fullname: '汝南县'
            },
            {
                id: '411728',
                fullname: '遂平县'
            },
            {
                id: '411729',
                fullname: '新蔡县'
            }
        ]
    ],
    [
        [
            {
                id: '420102',
                fullname: '江岸区'
            },
            {
                id: '420103',
                fullname: '江汉区'
            },
            {
                id: '420104',
                fullname: '硚口区'
            },
            {
                id: '420105',
                fullname: '汉阳区'
            },
            {
                id: '420106',
                fullname: '武昌区'
            },
            {
                id: '420107',
                fullname: '青山区'
            },
            {
                id: '420111',
                fullname: '洪山区'
            },
            {
                id: '420112',
                fullname: '东西湖区'
            },
            {
                id: '420113',
                fullname: '汉南区'
            },
            {
                id: '420114',
                fullname: '蔡甸区'
            },
            {
                id: '420115',
                fullname: '江夏区'
            },
            {
                id: '420116',
                fullname: '黄陂区'
            },
            {
                id: '420117',
                fullname: '新洲区'
            }
        ],
        [
            {
                id: '420202',
                fullname: '黄石港区'
            },
            {
                id: '420203',
                fullname: '西塞山区'
            },
            {
                id: '420204',
                fullname: '下陆区'
            },
            {
                id: '420205',
                fullname: '铁山区'
            },
            {
                id: '420222',
                fullname: '阳新县'
            },
            {
                id: '420281',
                fullname: '大冶市'
            }
        ],
        [
            {
                id: '420302',
                fullname: '茅箭区'
            },
            {
                id: '420303',
                fullname: '张湾区'
            },
            {
                id: '420304',
                fullname: '郧阳区'
            },
            {
                id: '420322',
                fullname: '郧西县'
            },
            {
                id: '420323',
                fullname: '竹山县'
            },
            {
                id: '420324',
                fullname: '竹溪县'
            },
            {
                id: '420325',
                fullname: '房县'
            },
            {
                id: '420381',
                fullname: '丹江口市'
            }
        ],
        [
            {
                id: '420502',
                fullname: '西陵区'
            },
            {
                id: '420503',
                fullname: '伍家岗区'
            },
            {
                id: '420504',
                fullname: '点军区'
            },
            {
                id: '420505',
                fullname: '猇亭区'
            },
            {
                id: '420506',
                fullname: '夷陵区'
            },
            {
                id: '420525',
                fullname: '远安县'
            },
            {
                id: '420526',
                fullname: '兴山县'
            },
            {
                id: '420527',
                fullname: '秭归县'
            },
            {
                id: '420528',
                fullname: '长阳土家族自治县'
            },
            {
                id: '420529',
                fullname: '五峰土家族自治县'
            },
            {
                id: '420581',
                fullname: '宜都市'
            },
            {
                id: '420582',
                fullname: '当阳市'
            },
            {
                id: '420583',
                fullname: '枝江市'
            }
        ],
        [
            {
                id: '420602',
                fullname: '襄城区'
            },
            {
                id: '420606',
                fullname: '樊城区'
            },
            {
                id: '420607',
                fullname: '襄州区'
            },
            {
                id: '420624',
                fullname: '南漳县'
            },
            {
                id: '420625',
                fullname: '谷城县'
            },
            {
                id: '420626',
                fullname: '保康县'
            },
            {
                id: '420682',
                fullname: '老河口市'
            },
            {
                id: '420683',
                fullname: '枣阳市'
            },
            {
                id: '420684',
                fullname: '宜城市'
            }
        ],
        [
            {
                id: '420702',
                fullname: '梁子湖区'
            },
            {
                id: '420703',
                fullname: '华容区'
            },
            {
                id: '420704',
                fullname: '鄂城区'
            }
        ],
        [
            {
                id: '420802',
                fullname: '东宝区'
            },
            {
                id: '420804',
                fullname: '掇刀区'
            },
            {
                id: '420822',
                fullname: '沙洋县'
            },
            {
                id: '420881',
                fullname: '钟祥市'
            },
            {
                id: '420882',
                fullname: '京山市'
            }
        ],
        [
            {
                id: '420902',
                fullname: '孝南区'
            },
            {
                id: '420921',
                fullname: '孝昌县'
            },
            {
                id: '420922',
                fullname: '大悟县'
            },
            {
                id: '420923',
                fullname: '云梦县'
            },
            {
                id: '420981',
                fullname: '应城市'
            },
            {
                id: '420982',
                fullname: '安陆市'
            },
            {
                id: '420984',
                fullname: '汉川市'
            }
        ],
        [
            {
                id: '421002',
                fullname: '沙市区'
            },
            {
                id: '421003',
                fullname: '荆州区'
            },
            {
                id: '421022',
                fullname: '公安县'
            },
            {
                id: '421024',
                fullname: '江陵县'
            },
            {
                id: '421081',
                fullname: '石首市'
            },
            {
                id: '421083',
                fullname: '洪湖市'
            },
            {
                id: '421087',
                fullname: '松滋市'
            },
            {
                id: '421088',
                fullname: '监利市'
            }
        ],
        [
            {
                id: '421102',
                fullname: '黄州区'
            },
            {
                id: '421121',
                fullname: '团风县'
            },
            {
                id: '421122',
                fullname: '红安县'
            },
            {
                id: '421123',
                fullname: '罗田县'
            },
            {
                id: '421124',
                fullname: '英山县'
            },
            {
                id: '421125',
                fullname: '浠水县'
            },
            {
                id: '421126',
                fullname: '蕲春县'
            },
            {
                id: '421127',
                fullname: '黄梅县'
            },
            {
                id: '421181',
                fullname: '麻城市'
            },
            {
                id: '421182',
                fullname: '武穴市'
            }
        ],
        [
            {
                id: '421202',
                fullname: '咸安区'
            },
            {
                id: '421221',
                fullname: '嘉鱼县'
            },
            {
                id: '421222',
                fullname: '通城县'
            },
            {
                id: '421223',
                fullname: '崇阳县'
            },
            {
                id: '421224',
                fullname: '通山县'
            },
            {
                id: '421281',
                fullname: '赤壁市'
            }
        ],
        [
            {
                id: '421303',
                fullname: '曾都区'
            },
            {
                id: '421321',
                fullname: '随县'
            },
            {
                id: '421381',
                fullname: '广水市'
            }
        ],
        [
            {
                id: '422801',
                fullname: '恩施市'
            },
            {
                id: '422802',
                fullname: '利川市'
            },
            {
                id: '422822',
                fullname: '建始县'
            },
            {
                id: '422823',
                fullname: '巴东县'
            },
            {
                id: '422825',
                fullname: '宣恩县'
            },
            {
                id: '422826',
                fullname: '咸丰县'
            },
            {
                id: '422827',
                fullname: '来凤县'
            },
            {
                id: '422828',
                fullname: '鹤峰县'
            }
        ]
    ],
    [
        [
            {
                id: '430102',
                fullname: '芙蓉区'
            },
            {
                id: '430103',
                fullname: '天心区'
            },
            {
                id: '430104',
                fullname: '岳麓区'
            },
            {
                id: '430105',
                fullname: '开福区'
            },
            {
                id: '430111',
                fullname: '雨花区'
            },
            {
                id: '430112',
                fullname: '望城区'
            },
            {
                id: '430121',
                fullname: '长沙县'
            },
            {
                id: '430181',
                fullname: '浏阳市'
            },
            {
                id: '430182',
                fullname: '宁乡市'
            }
        ],
        [
            {
                id: '430202',
                fullname: '荷塘区'
            },
            {
                id: '430203',
                fullname: '芦淞区'
            },
            {
                id: '430204',
                fullname: '石峰区'
            },
            {
                id: '430211',
                fullname: '天元区'
            },
            {
                id: '430212',
                fullname: '渌口区'
            },
            {
                id: '430223',
                fullname: '攸县'
            },
            {
                id: '430224',
                fullname: '茶陵县'
            },
            {
                id: '430225',
                fullname: '炎陵县'
            },
            {
                id: '430281',
                fullname: '醴陵市'
            }
        ],
        [
            {
                id: '430302',
                fullname: '雨湖区'
            },
            {
                id: '430304',
                fullname: '岳塘区'
            },
            {
                id: '430321',
                fullname: '湘潭县'
            },
            {
                id: '430381',
                fullname: '湘乡市'
            },
            {
                id: '430382',
                fullname: '韶山市'
            }
        ],
        [
            {
                id: '430405',
                fullname: '珠晖区'
            },
            {
                id: '430406',
                fullname: '雁峰区'
            },
            {
                id: '430407',
                fullname: '石鼓区'
            },
            {
                id: '430408',
                fullname: '蒸湘区'
            },
            {
                id: '430412',
                fullname: '南岳区'
            },
            {
                id: '430421',
                fullname: '衡阳县'
            },
            {
                id: '430422',
                fullname: '衡南县'
            },
            {
                id: '430423',
                fullname: '衡山县'
            },
            {
                id: '430424',
                fullname: '衡东县'
            },
            {
                id: '430426',
                fullname: '祁东县'
            },
            {
                id: '430481',
                fullname: '耒阳市'
            },
            {
                id: '430482',
                fullname: '常宁市'
            }
        ],
        [
            {
                id: '430502',
                fullname: '双清区'
            },
            {
                id: '430503',
                fullname: '大祥区'
            },
            {
                id: '430511',
                fullname: '北塔区'
            },
            {
                id: '430522',
                fullname: '新邵县'
            },
            {
                id: '430523',
                fullname: '邵阳县'
            },
            {
                id: '430524',
                fullname: '隆回县'
            },
            {
                id: '430525',
                fullname: '洞口县'
            },
            {
                id: '430527',
                fullname: '绥宁县'
            },
            {
                id: '430528',
                fullname: '新宁县'
            },
            {
                id: '430529',
                fullname: '城步苗族自治县'
            },
            {
                id: '430581',
                fullname: '武冈市'
            },
            {
                id: '430582',
                fullname: '邵东市'
            }
        ],
        [
            {
                id: '430602',
                fullname: '岳阳楼区'
            },
            {
                id: '430603',
                fullname: '云溪区'
            },
            {
                id: '430611',
                fullname: '君山区'
            },
            {
                id: '430621',
                fullname: '岳阳县'
            },
            {
                id: '430623',
                fullname: '华容县'
            },
            {
                id: '430624',
                fullname: '湘阴县'
            },
            {
                id: '430626',
                fullname: '平江县'
            },
            {
                id: '430681',
                fullname: '汨罗市'
            },
            {
                id: '430682',
                fullname: '临湘市'
            }
        ],
        [
            {
                id: '430702',
                fullname: '武陵区'
            },
            {
                id: '430703',
                fullname: '鼎城区'
            },
            {
                id: '430721',
                fullname: '安乡县'
            },
            {
                id: '430722',
                fullname: '汉寿县'
            },
            {
                id: '430723',
                fullname: '澧县'
            },
            {
                id: '430724',
                fullname: '临澧县'
            },
            {
                id: '430725',
                fullname: '桃源县'
            },
            {
                id: '430726',
                fullname: '石门县'
            },
            {
                id: '430781',
                fullname: '津市市'
            }
        ],
        [
            {
                id: '430802',
                fullname: '永定区'
            },
            {
                id: '430811',
                fullname: '武陵源区'
            },
            {
                id: '430821',
                fullname: '慈利县'
            },
            {
                id: '430822',
                fullname: '桑植县'
            }
        ],
        [
            {
                id: '430902',
                fullname: '资阳区'
            },
            {
                id: '430903',
                fullname: '赫山区'
            },
            {
                id: '430921',
                fullname: '南县'
            },
            {
                id: '430922',
                fullname: '桃江县'
            },
            {
                id: '430923',
                fullname: '安化县'
            },
            {
                id: '430981',
                fullname: '沅江市'
            }
        ],
        [
            {
                id: '431002',
                fullname: '北湖区'
            },
            {
                id: '431003',
                fullname: '苏仙区'
            },
            {
                id: '431021',
                fullname: '桂阳县'
            },
            {
                id: '431022',
                fullname: '宜章县'
            },
            {
                id: '431023',
                fullname: '永兴县'
            },
            {
                id: '431024',
                fullname: '嘉禾县'
            },
            {
                id: '431025',
                fullname: '临武县'
            },
            {
                id: '431026',
                fullname: '汝城县'
            },
            {
                id: '431027',
                fullname: '桂东县'
            },
            {
                id: '431028',
                fullname: '安仁县'
            },
            {
                id: '431081',
                fullname: '资兴市'
            }
        ],
        [
            {
                id: '431102',
                fullname: '零陵区'
            },
            {
                id: '431103',
                fullname: '冷水滩区'
            },
            {
                id: '431122',
                fullname: '东安县'
            },
            {
                id: '431123',
                fullname: '双牌县'
            },
            {
                id: '431124',
                fullname: '道县'
            },
            {
                id: '431125',
                fullname: '江永县'
            },
            {
                id: '431126',
                fullname: '宁远县'
            },
            {
                id: '431127',
                fullname: '蓝山县'
            },
            {
                id: '431128',
                fullname: '新田县'
            },
            {
                id: '431129',
                fullname: '江华瑶族自治县'
            },
            {
                id: '431181',
                fullname: '祁阳市'
            }
        ],
        [
            {
                id: '431202',
                fullname: '鹤城区'
            },
            {
                id: '431221',
                fullname: '中方县'
            },
            {
                id: '431222',
                fullname: '沅陵县'
            },
            {
                id: '431223',
                fullname: '辰溪县'
            },
            {
                id: '431224',
                fullname: '溆浦县'
            },
            {
                id: '431225',
                fullname: '会同县'
            },
            {
                id: '431226',
                fullname: '麻阳苗族自治县'
            },
            {
                id: '431227',
                fullname: '新晃侗族自治县'
            },
            {
                id: '431228',
                fullname: '芷江侗族自治县'
            },
            {
                id: '431229',
                fullname: '靖州苗族侗族自治县'
            },
            {
                id: '431230',
                fullname: '通道侗族自治县'
            },
            {
                id: '431281',
                fullname: '洪江市'
            }
        ],
        [
            {
                id: '431302',
                fullname: '娄星区'
            },
            {
                id: '431321',
                fullname: '双峰县'
            },
            {
                id: '431322',
                fullname: '新化县'
            },
            {
                id: '431381',
                fullname: '冷水江市'
            },
            {
                id: '431382',
                fullname: '涟源市'
            }
        ],
        [
            {
                id: '433101',
                fullname: '吉首市'
            },
            {
                id: '433122',
                fullname: '泸溪县'
            },
            {
                id: '433123',
                fullname: '凤凰县'
            },
            {
                id: '433124',
                fullname: '花垣县'
            },
            {
                id: '433125',
                fullname: '保靖县'
            },
            {
                id: '433126',
                fullname: '古丈县'
            },
            {
                id: '433127',
                fullname: '永顺县'
            },
            {
                id: '433130',
                fullname: '龙山县'
            }
        ]
    ],
    [
        [
            {
                id: '440103',
                fullname: '荔湾区'
            },
            {
                id: '440104',
                fullname: '越秀区'
            },
            {
                id: '440105',
                fullname: '海珠区'
            },
            {
                id: '440106',
                fullname: '天河区'
            },
            {
                id: '440111',
                fullname: '白云区'
            },
            {
                id: '440112',
                fullname: '黄埔区'
            },
            {
                id: '440113',
                fullname: '番禺区'
            },
            {
                id: '440114',
                fullname: '花都区'
            },
            {
                id: '440115',
                fullname: '南沙区'
            },
            {
                id: '440117',
                fullname: '从化区'
            },
            {
                id: '440118',
                fullname: '增城区'
            }
        ],
        [
            {
                id: '440203',
                fullname: '武江区'
            },
            {
                id: '440204',
                fullname: '浈江区'
            },
            {
                id: '440205',
                fullname: '曲江区'
            },
            {
                id: '440222',
                fullname: '始兴县'
            },
            {
                id: '440224',
                fullname: '仁化县'
            },
            {
                id: '440229',
                fullname: '翁源县'
            },
            {
                id: '440232',
                fullname: '乳源瑶族自治县'
            },
            {
                id: '440233',
                fullname: '新丰县'
            },
            {
                id: '440281',
                fullname: '乐昌市'
            },
            {
                id: '440282',
                fullname: '南雄市'
            }
        ],
        [
            {
                id: '440303',
                fullname: '罗湖区'
            },
            {
                id: '440304',
                fullname: '福田区'
            },
            {
                id: '440305',
                fullname: '南山区'
            },
            {
                id: '440306',
                fullname: '宝安区'
            },
            {
                id: '440307',
                fullname: '龙岗区'
            },
            {
                id: '440308',
                fullname: '盐田区'
            },
            {
                id: '440309',
                fullname: '龙华区'
            },
            {
                id: '440310',
                fullname: '坪山区'
            },
            {
                id: '440311',
                fullname: '光明区'
            }
        ],
        [
            {
                id: '440402',
                fullname: '香洲区'
            },
            {
                id: '440403',
                fullname: '斗门区'
            },
            {
                id: '440404',
                fullname: '金湾区'
            }
        ],
        [
            {
                id: '440507',
                fullname: '龙湖区'
            },
            {
                id: '440511',
                fullname: '金平区'
            },
            {
                id: '440512',
                fullname: '濠江区'
            },
            {
                id: '440513',
                fullname: '潮阳区'
            },
            {
                id: '440514',
                fullname: '潮南区'
            },
            {
                id: '440515',
                fullname: '澄海区'
            },
            {
                id: '440523',
                fullname: '南澳县'
            }
        ],
        [
            {
                id: '440604',
                fullname: '禅城区'
            },
            {
                id: '440605',
                fullname: '南海区'
            },
            {
                id: '440606',
                fullname: '顺德区'
            },
            {
                id: '440607',
                fullname: '三水区'
            },
            {
                id: '440608',
                fullname: '高明区'
            }
        ],
        [
            {
                id: '440703',
                fullname: '蓬江区'
            },
            {
                id: '440704',
                fullname: '江海区'
            },
            {
                id: '440705',
                fullname: '新会区'
            },
            {
                id: '440781',
                fullname: '台山市'
            },
            {
                id: '440783',
                fullname: '开平市'
            },
            {
                id: '440784',
                fullname: '鹤山市'
            },
            {
                id: '440785',
                fullname: '恩平市'
            }
        ],
        [
            {
                id: '440802',
                fullname: '赤坎区'
            },
            {
                id: '440803',
                fullname: '霞山区'
            },
            {
                id: '440804',
                fullname: '坡头区'
            },
            {
                id: '440811',
                fullname: '麻章区'
            },
            {
                id: '440823',
                fullname: '遂溪县'
            },
            {
                id: '440825',
                fullname: '徐闻县'
            },
            {
                id: '440881',
                fullname: '廉江市'
            },
            {
                id: '440882',
                fullname: '雷州市'
            },
            {
                id: '440883',
                fullname: '吴川市'
            }
        ],
        [
            {
                id: '440902',
                fullname: '茂南区'
            },
            {
                id: '440904',
                fullname: '电白区'
            },
            {
                id: '440981',
                fullname: '高州市'
            },
            {
                id: '440982',
                fullname: '化州市'
            },
            {
                id: '440983',
                fullname: '信宜市'
            }
        ],
        [
            {
                id: '441202',
                fullname: '端州区'
            },
            {
                id: '441203',
                fullname: '鼎湖区'
            },
            {
                id: '441204',
                fullname: '高要区'
            },
            {
                id: '441223',
                fullname: '广宁县'
            },
            {
                id: '441224',
                fullname: '怀集县'
            },
            {
                id: '441225',
                fullname: '封开县'
            },
            {
                id: '441226',
                fullname: '德庆县'
            },
            {
                id: '441284',
                fullname: '四会市'
            }
        ],
        [
            {
                id: '441302',
                fullname: '惠城区'
            },
            {
                id: '441303',
                fullname: '惠阳区'
            },
            {
                id: '441322',
                fullname: '博罗县'
            },
            {
                id: '441323',
                fullname: '惠东县'
            },
            {
                id: '441324',
                fullname: '龙门县'
            }
        ],
        [
            {
                id: '441402',
                fullname: '梅江区'
            },
            {
                id: '441403',
                fullname: '梅县区'
            },
            {
                id: '441422',
                fullname: '大埔县'
            },
            {
                id: '441423',
                fullname: '丰顺县'
            },
            {
                id: '441424',
                fullname: '五华县'
            },
            {
                id: '441426',
                fullname: '平远县'
            },
            {
                id: '441427',
                fullname: '蕉岭县'
            },
            {
                id: '441481',
                fullname: '兴宁市'
            }
        ],
        [
            {
                id: '441502',
                fullname: '城区'
            },
            {
                id: '441521',
                fullname: '海丰县'
            },
            {
                id: '441523',
                fullname: '陆河县'
            },
            {
                id: '441581',
                fullname: '陆丰市'
            }
        ],
        [
            {
                id: '441602',
                fullname: '源城区'
            },
            {
                id: '441621',
                fullname: '紫金县'
            },
            {
                id: '441622',
                fullname: '龙川县'
            },
            {
                id: '441623',
                fullname: '连平县'
            },
            {
                id: '441624',
                fullname: '和平县'
            },
            {
                id: '441625',
                fullname: '东源县'
            }
        ],
        [
            {
                id: '441702',
                fullname: '江城区'
            },
            {
                id: '441704',
                fullname: '阳东区'
            },
            {
                id: '441721',
                fullname: '阳西县'
            },
            {
                id: '441781',
                fullname: '阳春市'
            }
        ],
        [
            {
                id: '441802',
                fullname: '清城区'
            },
            {
                id: '441803',
                fullname: '清新区'
            },
            {
                id: '441821',
                fullname: '佛冈县'
            },
            {
                id: '441823',
                fullname: '阳山县'
            },
            {
                id: '441825',
                fullname: '连山壮族瑶族自治县'
            },
            {
                id: '441826',
                fullname: '连南瑶族自治县'
            },
            {
                id: '441881',
                fullname: '英德市'
            },
            {
                id: '441882',
                fullname: '连州市'
            }
        ],
        [
            {
                id: '441999',
                fullname: '东莞市'
            }
        ],
        [
            {
                id: '442099',
                fullname: '中山市'
            }
        ],
        [
            {
                id: '445102',
                fullname: '湘桥区'
            },
            {
                id: '445103',
                fullname: '潮安区'
            },
            {
                id: '445122',
                fullname: '饶平县'
            }
        ],
        [
            {
                id: '445202',
                fullname: '榕城区'
            },
            {
                id: '445203',
                fullname: '揭东区'
            },
            {
                id: '445222',
                fullname: '揭西县'
            },
            {
                id: '445224',
                fullname: '惠来县'
            },
            {
                id: '445281',
                fullname: '普宁市'
            }
        ],
        [
            {
                id: '445302',
                fullname: '云城区'
            },
            {
                id: '445303',
                fullname: '云安区'
            },
            {
                id: '445321',
                fullname: '新兴县'
            },
            {
                id: '445322',
                fullname: '郁南县'
            },
            {
                id: '445381',
                fullname: '罗定市'
            }
        ]
    ],
    [
        [
            {
                id: '450102',
                fullname: '兴宁区'
            },
            {
                id: '450103',
                fullname: '青秀区'
            },
            {
                id: '450105',
                fullname: '江南区'
            },
            {
                id: '450107',
                fullname: '西乡塘区'
            },
            {
                id: '450108',
                fullname: '良庆区'
            },
            {
                id: '450109',
                fullname: '邕宁区'
            },
            {
                id: '450110',
                fullname: '武鸣区'
            },
            {
                id: '450123',
                fullname: '隆安县'
            },
            {
                id: '450124',
                fullname: '马山县'
            },
            {
                id: '450125',
                fullname: '上林县'
            },
            {
                id: '450126',
                fullname: '宾阳县'
            },
            {
                id: '450181',
                fullname: '横州市'
            }
        ],
        [
            {
                id: '450202',
                fullname: '城中区'
            },
            {
                id: '450203',
                fullname: '鱼峰区'
            },
            {
                id: '450204',
                fullname: '柳南区'
            },
            {
                id: '450205',
                fullname: '柳北区'
            },
            {
                id: '450206',
                fullname: '柳江区'
            },
            {
                id: '450222',
                fullname: '柳城县'
            },
            {
                id: '450223',
                fullname: '鹿寨县'
            },
            {
                id: '450224',
                fullname: '融安县'
            },
            {
                id: '450225',
                fullname: '融水苗族自治县'
            },
            {
                id: '450226',
                fullname: '三江侗族自治县'
            }
        ],
        [
            {
                id: '450302',
                fullname: '秀峰区'
            },
            {
                id: '450303',
                fullname: '叠彩区'
            },
            {
                id: '450304',
                fullname: '象山区'
            },
            {
                id: '450305',
                fullname: '七星区'
            },
            {
                id: '450311',
                fullname: '雁山区'
            },
            {
                id: '450312',
                fullname: '临桂区'
            },
            {
                id: '450321',
                fullname: '阳朔县'
            },
            {
                id: '450323',
                fullname: '灵川县'
            },
            {
                id: '450324',
                fullname: '全州县'
            },
            {
                id: '450325',
                fullname: '兴安县'
            },
            {
                id: '450326',
                fullname: '永福县'
            },
            {
                id: '450327',
                fullname: '灌阳县'
            },
            {
                id: '450328',
                fullname: '龙胜各族自治县'
            },
            {
                id: '450329',
                fullname: '资源县'
            },
            {
                id: '450330',
                fullname: '平乐县'
            },
            {
                id: '450332',
                fullname: '恭城瑶族自治县'
            },
            {
                id: '450381',
                fullname: '荔浦市'
            }
        ],
        [
            {
                id: '450403',
                fullname: '万秀区'
            },
            {
                id: '450405',
                fullname: '长洲区'
            },
            {
                id: '450406',
                fullname: '龙圩区'
            },
            {
                id: '450421',
                fullname: '苍梧县'
            },
            {
                id: '450422',
                fullname: '藤县'
            },
            {
                id: '450423',
                fullname: '蒙山县'
            },
            {
                id: '450481',
                fullname: '岑溪市'
            }
        ],
        [
            {
                id: '450502',
                fullname: '海城区'
            },
            {
                id: '450503',
                fullname: '银海区'
            },
            {
                id: '450512',
                fullname: '铁山港区'
            },
            {
                id: '450521',
                fullname: '合浦县'
            }
        ],
        [
            {
                id: '450602',
                fullname: '港口区'
            },
            {
                id: '450603',
                fullname: '防城区'
            },
            {
                id: '450621',
                fullname: '上思县'
            },
            {
                id: '450681',
                fullname: '东兴市'
            }
        ],
        [
            {
                id: '450702',
                fullname: '钦南区'
            },
            {
                id: '450703',
                fullname: '钦北区'
            },
            {
                id: '450721',
                fullname: '灵山县'
            },
            {
                id: '450722',
                fullname: '浦北县'
            }
        ],
        [
            {
                id: '450802',
                fullname: '港北区'
            },
            {
                id: '450803',
                fullname: '港南区'
            },
            {
                id: '450804',
                fullname: '覃塘区'
            },
            {
                id: '450821',
                fullname: '平南县'
            },
            {
                id: '450881',
                fullname: '桂平市'
            }
        ],
        [
            {
                id: '450902',
                fullname: '玉州区'
            },
            {
                id: '450903',
                fullname: '福绵区'
            },
            {
                id: '450921',
                fullname: '容县'
            },
            {
                id: '450922',
                fullname: '陆川县'
            },
            {
                id: '450923',
                fullname: '博白县'
            },
            {
                id: '450924',
                fullname: '兴业县'
            },
            {
                id: '450981',
                fullname: '北流市'
            }
        ],
        [
            {
                id: '451002',
                fullname: '右江区'
            },
            {
                id: '451003',
                fullname: '田阳区'
            },
            {
                id: '451022',
                fullname: '田东县'
            },
            {
                id: '451024',
                fullname: '德保县'
            },
            {
                id: '451026',
                fullname: '那坡县'
            },
            {
                id: '451027',
                fullname: '凌云县'
            },
            {
                id: '451028',
                fullname: '乐业县'
            },
            {
                id: '451029',
                fullname: '田林县'
            },
            {
                id: '451030',
                fullname: '西林县'
            },
            {
                id: '451031',
                fullname: '隆林各族自治县'
            },
            {
                id: '451081',
                fullname: '靖西市'
            },
            {
                id: '451082',
                fullname: '平果市'
            }
        ],
        [
            {
                id: '451102',
                fullname: '八步区'
            },
            {
                id: '451103',
                fullname: '平桂区'
            },
            {
                id: '451121',
                fullname: '昭平县'
            },
            {
                id: '451122',
                fullname: '钟山县'
            },
            {
                id: '451123',
                fullname: '富川瑶族自治县'
            }
        ],
        [
            {
                id: '451202',
                fullname: '金城江区'
            },
            {
                id: '451203',
                fullname: '宜州区'
            },
            {
                id: '451221',
                fullname: '南丹县'
            },
            {
                id: '451222',
                fullname: '天峨县'
            },
            {
                id: '451223',
                fullname: '凤山县'
            },
            {
                id: '451224',
                fullname: '东兰县'
            },
            {
                id: '451225',
                fullname: '罗城仫佬族自治县'
            },
            {
                id: '451226',
                fullname: '环江毛南族自治县'
            },
            {
                id: '451227',
                fullname: '巴马瑶族自治县'
            },
            {
                id: '451228',
                fullname: '都安瑶族自治县'
            },
            {
                id: '451229',
                fullname: '大化瑶族自治县'
            }
        ],
        [
            {
                id: '451302',
                fullname: '兴宾区'
            },
            {
                id: '451321',
                fullname: '忻城县'
            },
            {
                id: '451322',
                fullname: '象州县'
            },
            {
                id: '451323',
                fullname: '武宣县'
            },
            {
                id: '451324',
                fullname: '金秀瑶族自治县'
            },
            {
                id: '451381',
                fullname: '合山市'
            }
        ],
        [
            {
                id: '451402',
                fullname: '江州区'
            },
            {
                id: '451421',
                fullname: '扶绥县'
            },
            {
                id: '451422',
                fullname: '宁明县'
            },
            {
                id: '451423',
                fullname: '龙州县'
            },
            {
                id: '451424',
                fullname: '大新县'
            },
            {
                id: '451425',
                fullname: '天等县'
            },
            {
                id: '451481',
                fullname: '凭祥市'
            }
        ]
    ],
    [
        [
            {
                id: '460105',
                fullname: '秀英区'
            },
            {
                id: '460106',
                fullname: '龙华区'
            },
            {
                id: '460107',
                fullname: '琼山区'
            },
            {
                id: '460108',
                fullname: '美兰区'
            }
        ],
        [
            {
                id: '460202',
                fullname: '海棠区'
            },
            {
                id: '460203',
                fullname: '吉阳区'
            },
            {
                id: '460204',
                fullname: '天涯区'
            },
            {
                id: '460205',
                fullname: '崖州区'
            }
        ],
        [
            {
                id: '460321',
                fullname: '西沙群岛'
            },
            {
                id: '460322',
                fullname: '南沙群岛'
            },
            {
                id: '460323',
                fullname: '中沙群岛'
            }
        ]
    ],
    [
        [
            {
                id: '510104',
                fullname: '锦江区'
            },
            {
                id: '510105',
                fullname: '青羊区'
            },
            {
                id: '510106',
                fullname: '金牛区'
            },
            {
                id: '510107',
                fullname: '武侯区'
            },
            {
                id: '510108',
                fullname: '成华区'
            },
            {
                id: '510112',
                fullname: '龙泉驿区'
            },
            {
                id: '510113',
                fullname: '青白江区'
            },
            {
                id: '510114',
                fullname: '新都区'
            },
            {
                id: '510115',
                fullname: '温江区'
            },
            {
                id: '510116',
                fullname: '双流区'
            },
            {
                id: '510117',
                fullname: '郫都区'
            },
            {
                id: '510118',
                fullname: '新津区'
            },
            {
                id: '510121',
                fullname: '金堂县'
            },
            {
                id: '510129',
                fullname: '大邑县'
            },
            {
                id: '510131',
                fullname: '蒲江县'
            },
            {
                id: '510181',
                fullname: '都江堰市'
            },
            {
                id: '510182',
                fullname: '彭州市'
            },
            {
                id: '510183',
                fullname: '邛崃市'
            },
            {
                id: '510184',
                fullname: '崇州市'
            },
            {
                id: '510185',
                fullname: '简阳市'
            }
        ],
        [
            {
                id: '510302',
                fullname: '自流井区'
            },
            {
                id: '510303',
                fullname: '贡井区'
            },
            {
                id: '510304',
                fullname: '大安区'
            },
            {
                id: '510311',
                fullname: '沿滩区'
            },
            {
                id: '510321',
                fullname: '荣县'
            },
            {
                id: '510322',
                fullname: '富顺县'
            }
        ],
        [
            {
                id: '510402',
                fullname: '东区'
            },
            {
                id: '510403',
                fullname: '西区'
            },
            {
                id: '510411',
                fullname: '仁和区'
            },
            {
                id: '510421',
                fullname: '米易县'
            },
            {
                id: '510422',
                fullname: '盐边县'
            }
        ],
        [
            {
                id: '510502',
                fullname: '江阳区'
            },
            {
                id: '510503',
                fullname: '纳溪区'
            },
            {
                id: '510504',
                fullname: '龙马潭区'
            },
            {
                id: '510521',
                fullname: '泸县'
            },
            {
                id: '510522',
                fullname: '合江县'
            },
            {
                id: '510524',
                fullname: '叙永县'
            },
            {
                id: '510525',
                fullname: '古蔺县'
            }
        ],
        [
            {
                id: '510603',
                fullname: '旌阳区'
            },
            {
                id: '510604',
                fullname: '罗江区'
            },
            {
                id: '510623',
                fullname: '中江县'
            },
            {
                id: '510681',
                fullname: '广汉市'
            },
            {
                id: '510682',
                fullname: '什邡市'
            },
            {
                id: '510683',
                fullname: '绵竹市'
            }
        ],
        [
            {
                id: '510703',
                fullname: '涪城区'
            },
            {
                id: '510704',
                fullname: '游仙区'
            },
            {
                id: '510705',
                fullname: '安州区'
            },
            {
                id: '510722',
                fullname: '三台县'
            },
            {
                id: '510723',
                fullname: '盐亭县'
            },
            {
                id: '510725',
                fullname: '梓潼县'
            },
            {
                id: '510726',
                fullname: '北川羌族自治县'
            },
            {
                id: '510727',
                fullname: '平武县'
            },
            {
                id: '510781',
                fullname: '江油市'
            }
        ],
        [
            {
                id: '510802',
                fullname: '利州区'
            },
            {
                id: '510811',
                fullname: '昭化区'
            },
            {
                id: '510812',
                fullname: '朝天区'
            },
            {
                id: '510821',
                fullname: '旺苍县'
            },
            {
                id: '510822',
                fullname: '青川县'
            },
            {
                id: '510823',
                fullname: '剑阁县'
            },
            {
                id: '510824',
                fullname: '苍溪县'
            }
        ],
        [
            {
                id: '510903',
                fullname: '船山区'
            },
            {
                id: '510904',
                fullname: '安居区'
            },
            {
                id: '510921',
                fullname: '蓬溪县'
            },
            {
                id: '510923',
                fullname: '大英县'
            },
            {
                id: '510981',
                fullname: '射洪市'
            }
        ],
        [
            {
                id: '511002',
                fullname: '市中区'
            },
            {
                id: '511011',
                fullname: '东兴区'
            },
            {
                id: '511024',
                fullname: '威远县'
            },
            {
                id: '511025',
                fullname: '资中县'
            },
            {
                id: '511083',
                fullname: '隆昌市'
            }
        ],
        [
            {
                id: '511102',
                fullname: '市中区'
            },
            {
                id: '511111',
                fullname: '沙湾区'
            },
            {
                id: '511112',
                fullname: '五通桥区'
            },
            {
                id: '511113',
                fullname: '金口河区'
            },
            {
                id: '511123',
                fullname: '犍为县'
            },
            {
                id: '511124',
                fullname: '井研县'
            },
            {
                id: '511126',
                fullname: '夹江县'
            },
            {
                id: '511129',
                fullname: '沐川县'
            },
            {
                id: '511132',
                fullname: '峨边彝族自治县'
            },
            {
                id: '511133',
                fullname: '马边彝族自治县'
            },
            {
                id: '511181',
                fullname: '峨眉山市'
            }
        ],
        [
            {
                id: '511302',
                fullname: '顺庆区'
            },
            {
                id: '511303',
                fullname: '高坪区'
            },
            {
                id: '511304',
                fullname: '嘉陵区'
            },
            {
                id: '511321',
                fullname: '南部县'
            },
            {
                id: '511322',
                fullname: '营山县'
            },
            {
                id: '511323',
                fullname: '蓬安县'
            },
            {
                id: '511324',
                fullname: '仪陇县'
            },
            {
                id: '511325',
                fullname: '西充县'
            },
            {
                id: '511381',
                fullname: '阆中市'
            }
        ],
        [
            {
                id: '511402',
                fullname: '东坡区'
            },
            {
                id: '511403',
                fullname: '彭山区'
            },
            {
                id: '511421',
                fullname: '仁寿县'
            },
            {
                id: '511423',
                fullname: '洪雅县'
            },
            {
                id: '511424',
                fullname: '丹棱县'
            },
            {
                id: '511425',
                fullname: '青神县'
            }
        ],
        [
            {
                id: '511502',
                fullname: '翠屏区'
            },
            {
                id: '511503',
                fullname: '南溪区'
            },
            {
                id: '511504',
                fullname: '叙州区'
            },
            {
                id: '511523',
                fullname: '江安县'
            },
            {
                id: '511524',
                fullname: '长宁县'
            },
            {
                id: '511525',
                fullname: '高县'
            },
            {
                id: '511526',
                fullname: '珙县'
            },
            {
                id: '511527',
                fullname: '筠连县'
            },
            {
                id: '511528',
                fullname: '兴文县'
            },
            {
                id: '511529',
                fullname: '屏山县'
            }
        ],
        [
            {
                id: '511602',
                fullname: '广安区'
            },
            {
                id: '511603',
                fullname: '前锋区'
            },
            {
                id: '511621',
                fullname: '岳池县'
            },
            {
                id: '511622',
                fullname: '武胜县'
            },
            {
                id: '511623',
                fullname: '邻水县'
            },
            {
                id: '511681',
                fullname: '华蓥市'
            }
        ],
        [
            {
                id: '511702',
                fullname: '通川区'
            },
            {
                id: '511703',
                fullname: '达川区'
            },
            {
                id: '511722',
                fullname: '宣汉县'
            },
            {
                id: '511723',
                fullname: '开江县'
            },
            {
                id: '511724',
                fullname: '大竹县'
            },
            {
                id: '511725',
                fullname: '渠县'
            },
            {
                id: '511781',
                fullname: '万源市'
            }
        ],
        [
            {
                id: '511802',
                fullname: '雨城区'
            },
            {
                id: '511803',
                fullname: '名山区'
            },
            {
                id: '511822',
                fullname: '荥经县'
            },
            {
                id: '511823',
                fullname: '汉源县'
            },
            {
                id: '511824',
                fullname: '石棉县'
            },
            {
                id: '511825',
                fullname: '天全县'
            },
            {
                id: '511826',
                fullname: '芦山县'
            },
            {
                id: '511827',
                fullname: '宝兴县'
            }
        ],
        [
            {
                id: '511902',
                fullname: '巴州区'
            },
            {
                id: '511903',
                fullname: '恩阳区'
            },
            {
                id: '511921',
                fullname: '通江县'
            },
            {
                id: '511922',
                fullname: '南江县'
            },
            {
                id: '511923',
                fullname: '平昌县'
            }
        ],
        [
            {
                id: '512002',
                fullname: '雁江区'
            },
            {
                id: '512021',
                fullname: '安岳县'
            },
            {
                id: '512022',
                fullname: '乐至县'
            }
        ],
        [
            {
                id: '513201',
                fullname: '马尔康市'
            },
            {
                id: '513221',
                fullname: '汶川县'
            },
            {
                id: '513222',
                fullname: '理县'
            },
            {
                id: '513223',
                fullname: '茂县'
            },
            {
                id: '513224',
                fullname: '松潘县'
            },
            {
                id: '513225',
                fullname: '九寨沟县'
            },
            {
                id: '513226',
                fullname: '金川县'
            },
            {
                id: '513227',
                fullname: '小金县'
            },
            {
                id: '513228',
                fullname: '黑水县'
            },
            {
                id: '513230',
                fullname: '壤塘县'
            },
            {
                id: '513231',
                fullname: '阿坝县'
            },
            {
                id: '513232',
                fullname: '若尔盖县'
            },
            {
                id: '513233',
                fullname: '红原县'
            }
        ],
        [
            {
                id: '513301',
                fullname: '康定市'
            },
            {
                id: '513322',
                fullname: '泸定县'
            },
            {
                id: '513323',
                fullname: '丹巴县'
            },
            {
                id: '513324',
                fullname: '九龙县'
            },
            {
                id: '513325',
                fullname: '雅江县'
            },
            {
                id: '513326',
                fullname: '道孚县'
            },
            {
                id: '513327',
                fullname: '炉霍县'
            },
            {
                id: '513328',
                fullname: '甘孜县'
            },
            {
                id: '513329',
                fullname: '新龙县'
            },
            {
                id: '513330',
                fullname: '德格县'
            },
            {
                id: '513331',
                fullname: '白玉县'
            },
            {
                id: '513332',
                fullname: '石渠县'
            },
            {
                id: '513333',
                fullname: '色达县'
            },
            {
                id: '513334',
                fullname: '理塘县'
            },
            {
                id: '513335',
                fullname: '巴塘县'
            },
            {
                id: '513336',
                fullname: '乡城县'
            },
            {
                id: '513337',
                fullname: '稻城县'
            },
            {
                id: '513338',
                fullname: '得荣县'
            }
        ],
        [
            {
                id: '513401',
                fullname: '西昌市'
            },
            {
                id: '513402',
                fullname: '会理市'
            },
            {
                id: '513422',
                fullname: '木里藏族自治县'
            },
            {
                id: '513423',
                fullname: '盐源县'
            },
            {
                id: '513424',
                fullname: '德昌县'
            },
            {
                id: '513426',
                fullname: '会东县'
            },
            {
                id: '513427',
                fullname: '宁南县'
            },
            {
                id: '513428',
                fullname: '普格县'
            },
            {
                id: '513429',
                fullname: '布拖县'
            },
            {
                id: '513430',
                fullname: '金阳县'
            },
            {
                id: '513431',
                fullname: '昭觉县'
            },
            {
                id: '513432',
                fullname: '喜德县'
            },
            {
                id: '513433',
                fullname: '冕宁县'
            },
            {
                id: '513434',
                fullname: '越西县'
            },
            {
                id: '513435',
                fullname: '甘洛县'
            },
            {
                id: '513436',
                fullname: '美姑县'
            },
            {
                id: '513437',
                fullname: '雷波县'
            }
        ]
    ],
    [
        [
            {
                id: '520102',
                fullname: '南明区'
            },
            {
                id: '520103',
                fullname: '云岩区'
            },
            {
                id: '520111',
                fullname: '花溪区'
            },
            {
                id: '520112',
                fullname: '乌当区'
            },
            {
                id: '520113',
                fullname: '白云区'
            },
            {
                id: '520115',
                fullname: '观山湖区'
            },
            {
                id: '520121',
                fullname: '开阳县'
            },
            {
                id: '520122',
                fullname: '息烽县'
            },
            {
                id: '520123',
                fullname: '修文县'
            },
            {
                id: '520181',
                fullname: '清镇市'
            }
        ],
        [
            {
                id: '520201',
                fullname: '钟山区'
            },
            {
                id: '520203',
                fullname: '六枝特区'
            },
            {
                id: '520204',
                fullname: '水城区'
            },
            {
                id: '520281',
                fullname: '盘州市'
            }
        ],
        [
            {
                id: '520302',
                fullname: '红花岗区'
            },
            {
                id: '520303',
                fullname: '汇川区'
            },
            {
                id: '520304',
                fullname: '播州区'
            },
            {
                id: '520322',
                fullname: '桐梓县'
            },
            {
                id: '520323',
                fullname: '绥阳县'
            },
            {
                id: '520324',
                fullname: '正安县'
            },
            {
                id: '520325',
                fullname: '道真仡佬族苗族自治县'
            },
            {
                id: '520326',
                fullname: '务川仡佬族苗族自治县'
            },
            {
                id: '520327',
                fullname: '凤冈县'
            },
            {
                id: '520328',
                fullname: '湄潭县'
            },
            {
                id: '520329',
                fullname: '余庆县'
            },
            {
                id: '520330',
                fullname: '习水县'
            },
            {
                id: '520381',
                fullname: '赤水市'
            },
            {
                id: '520382',
                fullname: '仁怀市'
            }
        ],
        [
            {
                id: '520402',
                fullname: '西秀区'
            },
            {
                id: '520403',
                fullname: '平坝区'
            },
            {
                id: '520422',
                fullname: '普定县'
            },
            {
                id: '520423',
                fullname: '镇宁布依族苗族自治县'
            },
            {
                id: '520424',
                fullname: '关岭布依族苗族自治县'
            },
            {
                id: '520425',
                fullname: '紫云苗族布依族自治县'
            }
        ],
        [
            {
                id: '520502',
                fullname: '七星关区'
            },
            {
                id: '520521',
                fullname: '大方县'
            },
            {
                id: '520523',
                fullname: '金沙县'
            },
            {
                id: '520524',
                fullname: '织金县'
            },
            {
                id: '520525',
                fullname: '纳雍县'
            },
            {
                id: '520526',
                fullname: '威宁彝族回族苗族自治县'
            },
            {
                id: '520527',
                fullname: '赫章县'
            },
            {
                id: '520581',
                fullname: '黔西市'
            }
        ],
        [
            {
                id: '520602',
                fullname: '碧江区'
            },
            {
                id: '520603',
                fullname: '万山区'
            },
            {
                id: '520621',
                fullname: '江口县'
            },
            {
                id: '520622',
                fullname: '玉屏侗族自治县'
            },
            {
                id: '520623',
                fullname: '石阡县'
            },
            {
                id: '520624',
                fullname: '思南县'
            },
            {
                id: '520625',
                fullname: '印江土家族苗族自治县'
            },
            {
                id: '520626',
                fullname: '德江县'
            },
            {
                id: '520627',
                fullname: '沿河土家族自治县'
            },
            {
                id: '520628',
                fullname: '松桃苗族自治县'
            }
        ],
        [
            {
                id: '522301',
                fullname: '兴义市'
            },
            {
                id: '522302',
                fullname: '兴仁市'
            },
            {
                id: '522323',
                fullname: '普安县'
            },
            {
                id: '522324',
                fullname: '晴隆县'
            },
            {
                id: '522325',
                fullname: '贞丰县'
            },
            {
                id: '522326',
                fullname: '望谟县'
            },
            {
                id: '522327',
                fullname: '册亨县'
            },
            {
                id: '522328',
                fullname: '安龙县'
            }
        ],
        [
            {
                id: '522601',
                fullname: '凯里市'
            },
            {
                id: '522622',
                fullname: '黄平县'
            },
            {
                id: '522623',
                fullname: '施秉县'
            },
            {
                id: '522624',
                fullname: '三穗县'
            },
            {
                id: '522625',
                fullname: '镇远县'
            },
            {
                id: '522626',
                fullname: '岑巩县'
            },
            {
                id: '522627',
                fullname: '天柱县'
            },
            {
                id: '522628',
                fullname: '锦屏县'
            },
            {
                id: '522629',
                fullname: '剑河县'
            },
            {
                id: '522630',
                fullname: '台江县'
            },
            {
                id: '522631',
                fullname: '黎平县'
            },
            {
                id: '522632',
                fullname: '榕江县'
            },
            {
                id: '522633',
                fullname: '从江县'
            },
            {
                id: '522634',
                fullname: '雷山县'
            },
            {
                id: '522635',
                fullname: '麻江县'
            },
            {
                id: '522636',
                fullname: '丹寨县'
            }
        ],
        [
            {
                id: '522701',
                fullname: '都匀市'
            },
            {
                id: '522702',
                fullname: '福泉市'
            },
            {
                id: '522722',
                fullname: '荔波县'
            },
            {
                id: '522723',
                fullname: '贵定县'
            },
            {
                id: '522725',
                fullname: '瓮安县'
            },
            {
                id: '522726',
                fullname: '独山县'
            },
            {
                id: '522727',
                fullname: '平塘县'
            },
            {
                id: '522728',
                fullname: '罗甸县'
            },
            {
                id: '522729',
                fullname: '长顺县'
            },
            {
                id: '522730',
                fullname: '龙里县'
            },
            {
                id: '522731',
                fullname: '惠水县'
            },
            {
                id: '522732',
                fullname: '三都水族自治县'
            }
        ]
    ],
    [
        [
            {
                id: '530102',
                fullname: '五华区'
            },
            {
                id: '530103',
                fullname: '盘龙区'
            },
            {
                id: '530111',
                fullname: '官渡区'
            },
            {
                id: '530112',
                fullname: '西山区'
            },
            {
                id: '530113',
                fullname: '东川区'
            },
            {
                id: '530114',
                fullname: '呈贡区'
            },
            {
                id: '530115',
                fullname: '晋宁区'
            },
            {
                id: '530124',
                fullname: '富民县'
            },
            {
                id: '530125',
                fullname: '宜良县'
            },
            {
                id: '530126',
                fullname: '石林彝族自治县'
            },
            {
                id: '530127',
                fullname: '嵩明县'
            },
            {
                id: '530128',
                fullname: '禄劝彝族苗族自治县'
            },
            {
                id: '530129',
                fullname: '寻甸回族彝族自治县'
            },
            {
                id: '530181',
                fullname: '安宁市'
            }
        ],
        [
            {
                id: '530302',
                fullname: '麒麟区'
            },
            {
                id: '530303',
                fullname: '沾益区'
            },
            {
                id: '530304',
                fullname: '马龙区'
            },
            {
                id: '530322',
                fullname: '陆良县'
            },
            {
                id: '530323',
                fullname: '师宗县'
            },
            {
                id: '530324',
                fullname: '罗平县'
            },
            {
                id: '530325',
                fullname: '富源县'
            },
            {
                id: '530326',
                fullname: '会泽县'
            },
            {
                id: '530381',
                fullname: '宣威市'
            }
        ],
        [
            {
                id: '530402',
                fullname: '红塔区'
            },
            {
                id: '530403',
                fullname: '江川区'
            },
            {
                id: '530423',
                fullname: '通海县'
            },
            {
                id: '530424',
                fullname: '华宁县'
            },
            {
                id: '530425',
                fullname: '易门县'
            },
            {
                id: '530426',
                fullname: '峨山彝族自治县'
            },
            {
                id: '530427',
                fullname: '新平彝族傣族自治县'
            },
            {
                id: '530428',
                fullname: '元江哈尼族彝族傣族自治县'
            },
            {
                id: '530481',
                fullname: '澄江市'
            }
        ],
        [
            {
                id: '530502',
                fullname: '隆阳区'
            },
            {
                id: '530521',
                fullname: '施甸县'
            },
            {
                id: '530523',
                fullname: '龙陵县'
            },
            {
                id: '530524',
                fullname: '昌宁县'
            },
            {
                id: '530581',
                fullname: '腾冲市'
            }
        ],
        [
            {
                id: '530602',
                fullname: '昭阳区'
            },
            {
                id: '530621',
                fullname: '鲁甸县'
            },
            {
                id: '530622',
                fullname: '巧家县'
            },
            {
                id: '530623',
                fullname: '盐津县'
            },
            {
                id: '530624',
                fullname: '大关县'
            },
            {
                id: '530625',
                fullname: '永善县'
            },
            {
                id: '530626',
                fullname: '绥江县'
            },
            {
                id: '530627',
                fullname: '镇雄县'
            },
            {
                id: '530628',
                fullname: '彝良县'
            },
            {
                id: '530629',
                fullname: '威信县'
            },
            {
                id: '530681',
                fullname: '水富市'
            }
        ],
        [
            {
                id: '530702',
                fullname: '古城区'
            },
            {
                id: '530721',
                fullname: '玉龙纳西族自治县'
            },
            {
                id: '530722',
                fullname: '永胜县'
            },
            {
                id: '530723',
                fullname: '华坪县'
            },
            {
                id: '530724',
                fullname: '宁蒗彝族自治县'
            }
        ],
        [
            {
                id: '530802',
                fullname: '思茅区'
            },
            {
                id: '530821',
                fullname: '宁洱哈尼族彝族自治县'
            },
            {
                id: '530822',
                fullname: '墨江哈尼族自治县'
            },
            {
                id: '530823',
                fullname: '景东彝族自治县'
            },
            {
                id: '530824',
                fullname: '景谷傣族彝族自治县'
            },
            {
                id: '530825',
                fullname: '镇沅彝族哈尼族拉祜族自治县'
            },
            {
                id: '530826',
                fullname: '江城哈尼族彝族自治县'
            },
            {
                id: '530827',
                fullname: '孟连傣族拉祜族佤族自治县'
            },
            {
                id: '530828',
                fullname: '澜沧拉祜族自治县'
            },
            {
                id: '530829',
                fullname: '西盟佤族自治县'
            }
        ],
        [
            {
                id: '530902',
                fullname: '临翔区'
            },
            {
                id: '530921',
                fullname: '凤庆县'
            },
            {
                id: '530922',
                fullname: '云县'
            },
            {
                id: '530923',
                fullname: '永德县'
            },
            {
                id: '530924',
                fullname: '镇康县'
            },
            {
                id: '530925',
                fullname: '双江拉祜族佤族布朗族傣族自治县'
            },
            {
                id: '530926',
                fullname: '耿马傣族佤族自治县'
            },
            {
                id: '530927',
                fullname: '沧源佤族自治县'
            }
        ],
        [
            {
                id: '532301',
                fullname: '楚雄市'
            },
            {
                id: '532302',
                fullname: '禄丰市'
            },
            {
                id: '532322',
                fullname: '双柏县'
            },
            {
                id: '532323',
                fullname: '牟定县'
            },
            {
                id: '532324',
                fullname: '南华县'
            },
            {
                id: '532325',
                fullname: '姚安县'
            },
            {
                id: '532326',
                fullname: '大姚县'
            },
            {
                id: '532327',
                fullname: '永仁县'
            },
            {
                id: '532328',
                fullname: '元谋县'
            },
            {
                id: '532329',
                fullname: '武定县'
            }
        ],
        [
            {
                id: '532501',
                fullname: '个旧市'
            },
            {
                id: '532502',
                fullname: '开远市'
            },
            {
                id: '532503',
                fullname: '蒙自市'
            },
            {
                id: '532504',
                fullname: '弥勒市'
            },
            {
                id: '532523',
                fullname: '屏边苗族自治县'
            },
            {
                id: '532524',
                fullname: '建水县'
            },
            {
                id: '532525',
                fullname: '石屏县'
            },
            {
                id: '532527',
                fullname: '泸西县'
            },
            {
                id: '532528',
                fullname: '元阳县'
            },
            {
                id: '532529',
                fullname: '红河县'
            },
            {
                id: '532530',
                fullname: '金平苗族瑶族傣族自治县'
            },
            {
                id: '532531',
                fullname: '绿春县'
            },
            {
                id: '532532',
                fullname: '河口瑶族自治县'
            }
        ],
        [
            {
                id: '532601',
                fullname: '文山市'
            },
            {
                id: '532622',
                fullname: '砚山县'
            },
            {
                id: '532623',
                fullname: '西畴县'
            },
            {
                id: '532624',
                fullname: '麻栗坡县'
            },
            {
                id: '532625',
                fullname: '马关县'
            },
            {
                id: '532626',
                fullname: '丘北县'
            },
            {
                id: '532627',
                fullname: '广南县'
            },
            {
                id: '532628',
                fullname: '富宁县'
            }
        ],
        [
            {
                id: '532801',
                fullname: '景洪市'
            },
            {
                id: '532822',
                fullname: '勐海县'
            },
            {
                id: '532823',
                fullname: '勐腊县'
            }
        ],
        [
            {
                id: '532901',
                fullname: '大理市'
            },
            {
                id: '532922',
                fullname: '漾濞彝族自治县'
            },
            {
                id: '532923',
                fullname: '祥云县'
            },
            {
                id: '532924',
                fullname: '宾川县'
            },
            {
                id: '532925',
                fullname: '弥渡县'
            },
            {
                id: '532926',
                fullname: '南涧彝族自治县'
            },
            {
                id: '532927',
                fullname: '巍山彝族回族自治县'
            },
            {
                id: '532928',
                fullname: '永平县'
            },
            {
                id: '532929',
                fullname: '云龙县'
            },
            {
                id: '532930',
                fullname: '洱源县'
            },
            {
                id: '532931',
                fullname: '剑川县'
            },
            {
                id: '532932',
                fullname: '鹤庆县'
            }
        ],
        [
            {
                id: '533102',
                fullname: '瑞丽市'
            },
            {
                id: '533103',
                fullname: '芒市'
            },
            {
                id: '533122',
                fullname: '梁河县'
            },
            {
                id: '533123',
                fullname: '盈江县'
            },
            {
                id: '533124',
                fullname: '陇川县'
            }
        ],
        [
            {
                id: '533301',
                fullname: '泸水市'
            },
            {
                id: '533323',
                fullname: '福贡县'
            },
            {
                id: '533324',
                fullname: '贡山独龙族怒族自治县'
            },
            {
                id: '533325',
                fullname: '兰坪白族普米族自治县'
            }
        ],
        [
            {
                id: '533401',
                fullname: '香格里拉市'
            },
            {
                id: '533422',
                fullname: '德钦县'
            },
            {
                id: '533423',
                fullname: '维西傈僳族自治县'
            }
        ]
    ],
    [
        [
            {
                id: '540102',
                fullname: '城关区'
            },
            {
                id: '540103',
                fullname: '堆龙德庆区'
            },
            {
                id: '540104',
                fullname: '达孜区'
            },
            {
                id: '540121',
                fullname: '林周县'
            },
            {
                id: '540122',
                fullname: '当雄县'
            },
            {
                id: '540123',
                fullname: '尼木县'
            },
            {
                id: '540124',
                fullname: '曲水县'
            },
            {
                id: '540127',
                fullname: '墨竹工卡县'
            }
        ],
        [
            {
                id: '540202',
                fullname: '桑珠孜区'
            },
            {
                id: '540221',
                fullname: '南木林县'
            },
            {
                id: '540222',
                fullname: '江孜县'
            },
            {
                id: '540223',
                fullname: '定日县'
            },
            {
                id: '540224',
                fullname: '萨迦县'
            },
            {
                id: '540225',
                fullname: '拉孜县'
            },
            {
                id: '540226',
                fullname: '昂仁县'
            },
            {
                id: '540227',
                fullname: '谢通门县'
            },
            {
                id: '540228',
                fullname: '白朗县'
            },
            {
                id: '540229',
                fullname: '仁布县'
            },
            {
                id: '540230',
                fullname: '康马县'
            },
            {
                id: '540231',
                fullname: '定结县'
            },
            {
                id: '540232',
                fullname: '仲巴县'
            },
            {
                id: '540233',
                fullname: '亚东县'
            },
            {
                id: '540234',
                fullname: '吉隆县'
            },
            {
                id: '540235',
                fullname: '聂拉木县'
            },
            {
                id: '540236',
                fullname: '萨嘎县'
            },
            {
                id: '540237',
                fullname: '岗巴县'
            }
        ],
        [
            {
                id: '540302',
                fullname: '卡若区'
            },
            {
                id: '540321',
                fullname: '江达县'
            },
            {
                id: '540322',
                fullname: '贡觉县'
            },
            {
                id: '540323',
                fullname: '类乌齐县'
            },
            {
                id: '540324',
                fullname: '丁青县'
            },
            {
                id: '540325',
                fullname: '察雅县'
            },
            {
                id: '540326',
                fullname: '八宿县'
            },
            {
                id: '540327',
                fullname: '左贡县'
            },
            {
                id: '540328',
                fullname: '芒康县'
            },
            {
                id: '540329',
                fullname: '洛隆县'
            },
            {
                id: '540330',
                fullname: '边坝县'
            }
        ],
        [
            {
                id: '540402',
                fullname: '巴宜区'
            },
            {
                id: '540421',
                fullname: '工布江达县'
            },
            {
                id: '540422',
                fullname: '米林县'
            },
            {
                id: '540423',
                fullname: '墨脱县'
            },
            {
                id: '540424',
                fullname: '波密县'
            },
            {
                id: '540425',
                fullname: '察隅县'
            },
            {
                id: '540426',
                fullname: '朗县'
            }
        ],
        [
            {
                id: '540502',
                fullname: '乃东区'
            },
            {
                id: '540521',
                fullname: '扎囊县'
            },
            {
                id: '540522',
                fullname: '贡嘎县'
            },
            {
                id: '540523',
                fullname: '桑日县'
            },
            {
                id: '540524',
                fullname: '琼结县'
            },
            {
                id: '540525',
                fullname: '曲松县'
            },
            {
                id: '540526',
                fullname: '措美县'
            },
            {
                id: '540527',
                fullname: '洛扎县'
            },
            {
                id: '540528',
                fullname: '加查县'
            },
            {
                id: '540529',
                fullname: '隆子县'
            },
            {
                id: '540530',
                fullname: '错那县'
            },
            {
                id: '540531',
                fullname: '浪卡子县'
            }
        ],
        [
            {
                id: '540602',
                fullname: '色尼区'
            },
            {
                id: '540621',
                fullname: '嘉黎县'
            },
            {
                id: '540622',
                fullname: '比如县'
            },
            {
                id: '540623',
                fullname: '聂荣县'
            },
            {
                id: '540624',
                fullname: '安多县'
            },
            {
                id: '540625',
                fullname: '申扎县'
            },
            {
                id: '540626',
                fullname: '索县'
            },
            {
                id: '540627',
                fullname: '班戈县'
            },
            {
                id: '540628',
                fullname: '巴青县'
            },
            {
                id: '540629',
                fullname: '尼玛县'
            },
            {
                id: '540630',
                fullname: '双湖县'
            }
        ],
        [
            {
                id: '542521',
                fullname: '普兰县'
            },
            {
                id: '542522',
                fullname: '札达县'
            },
            {
                id: '542523',
                fullname: '噶尔县'
            },
            {
                id: '542524',
                fullname: '日土县'
            },
            {
                id: '542525',
                fullname: '革吉县'
            },
            {
                id: '542526',
                fullname: '改则县'
            },
            {
                id: '542527',
                fullname: '措勤县'
            }
        ]
    ],
    [
        [
            {
                id: '610102',
                fullname: '新城区'
            },
            {
                id: '610103',
                fullname: '碑林区'
            },
            {
                id: '610104',
                fullname: '莲湖区'
            },
            {
                id: '610111',
                fullname: '灞桥区'
            },
            {
                id: '610112',
                fullname: '未央区'
            },
            {
                id: '610113',
                fullname: '雁塔区'
            },
            {
                id: '610114',
                fullname: '阎良区'
            },
            {
                id: '610115',
                fullname: '临潼区'
            },
            {
                id: '610116',
                fullname: '长安区'
            },
            {
                id: '610117',
                fullname: '高陵区'
            },
            {
                id: '610118',
                fullname: '鄠邑区'
            },
            {
                id: '610122',
                fullname: '蓝田县'
            },
            {
                id: '610124',
                fullname: '周至县'
            }
        ],
        [
            {
                id: '610202',
                fullname: '王益区'
            },
            {
                id: '610203',
                fullname: '印台区'
            },
            {
                id: '610204',
                fullname: '耀州区'
            },
            {
                id: '610222',
                fullname: '宜君县'
            }
        ],
        [
            {
                id: '610302',
                fullname: '渭滨区'
            },
            {
                id: '610303',
                fullname: '金台区'
            },
            {
                id: '610304',
                fullname: '陈仓区'
            },
            {
                id: '610305',
                fullname: '凤翔区'
            },
            {
                id: '610323',
                fullname: '岐山县'
            },
            {
                id: '610324',
                fullname: '扶风县'
            },
            {
                id: '610326',
                fullname: '眉县'
            },
            {
                id: '610327',
                fullname: '陇县'
            },
            {
                id: '610328',
                fullname: '千阳县'
            },
            {
                id: '610329',
                fullname: '麟游县'
            },
            {
                id: '610330',
                fullname: '凤县'
            },
            {
                id: '610331',
                fullname: '太白县'
            }
        ],
        [
            {
                id: '610402',
                fullname: '秦都区'
            },
            {
                id: '610403',
                fullname: '杨陵区'
            },
            {
                id: '610404',
                fullname: '渭城区'
            },
            {
                id: '610422',
                fullname: '三原县'
            },
            {
                id: '610423',
                fullname: '泾阳县'
            },
            {
                id: '610424',
                fullname: '乾县'
            },
            {
                id: '610425',
                fullname: '礼泉县'
            },
            {
                id: '610426',
                fullname: '永寿县'
            },
            {
                id: '610428',
                fullname: '长武县'
            },
            {
                id: '610429',
                fullname: '旬邑县'
            },
            {
                id: '610430',
                fullname: '淳化县'
            },
            {
                id: '610431',
                fullname: '武功县'
            },
            {
                id: '610481',
                fullname: '兴平市'
            },
            {
                id: '610482',
                fullname: '彬州市'
            }
        ],
        [
            {
                id: '610502',
                fullname: '临渭区'
            },
            {
                id: '610503',
                fullname: '华州区'
            },
            {
                id: '610522',
                fullname: '潼关县'
            },
            {
                id: '610523',
                fullname: '大荔县'
            },
            {
                id: '610524',
                fullname: '合阳县'
            },
            {
                id: '610525',
                fullname: '澄城县'
            },
            {
                id: '610526',
                fullname: '蒲城县'
            },
            {
                id: '610527',
                fullname: '白水县'
            },
            {
                id: '610528',
                fullname: '富平县'
            },
            {
                id: '610581',
                fullname: '韩城市'
            },
            {
                id: '610582',
                fullname: '华阴市'
            }
        ],
        [
            {
                id: '610602',
                fullname: '宝塔区'
            },
            {
                id: '610603',
                fullname: '安塞区'
            },
            {
                id: '610621',
                fullname: '延长县'
            },
            {
                id: '610622',
                fullname: '延川县'
            },
            {
                id: '610625',
                fullname: '志丹县'
            },
            {
                id: '610626',
                fullname: '吴起县'
            },
            {
                id: '610627',
                fullname: '甘泉县'
            },
            {
                id: '610628',
                fullname: '富县'
            },
            {
                id: '610629',
                fullname: '洛川县'
            },
            {
                id: '610630',
                fullname: '宜川县'
            },
            {
                id: '610631',
                fullname: '黄龙县'
            },
            {
                id: '610632',
                fullname: '黄陵县'
            },
            {
                id: '610681',
                fullname: '子长市'
            }
        ],
        [
            {
                id: '610702',
                fullname: '汉台区'
            },
            {
                id: '610703',
                fullname: '南郑区'
            },
            {
                id: '610722',
                fullname: '城固县'
            },
            {
                id: '610723',
                fullname: '洋县'
            },
            {
                id: '610724',
                fullname: '西乡县'
            },
            {
                id: '610725',
                fullname: '勉县'
            },
            {
                id: '610726',
                fullname: '宁强县'
            },
            {
                id: '610727',
                fullname: '略阳县'
            },
            {
                id: '610728',
                fullname: '镇巴县'
            },
            {
                id: '610729',
                fullname: '留坝县'
            },
            {
                id: '610730',
                fullname: '佛坪县'
            }
        ],
        [
            {
                id: '610802',
                fullname: '榆阳区'
            },
            {
                id: '610803',
                fullname: '横山区'
            },
            {
                id: '610822',
                fullname: '府谷县'
            },
            {
                id: '610824',
                fullname: '靖边县'
            },
            {
                id: '610825',
                fullname: '定边县'
            },
            {
                id: '610826',
                fullname: '绥德县'
            },
            {
                id: '610827',
                fullname: '米脂县'
            },
            {
                id: '610828',
                fullname: '佳县'
            },
            {
                id: '610829',
                fullname: '吴堡县'
            },
            {
                id: '610830',
                fullname: '清涧县'
            },
            {
                id: '610831',
                fullname: '子洲县'
            },
            {
                id: '610881',
                fullname: '神木市'
            }
        ],
        [
            {
                id: '610902',
                fullname: '汉滨区'
            },
            {
                id: '610921',
                fullname: '汉阴县'
            },
            {
                id: '610922',
                fullname: '石泉县'
            },
            {
                id: '610923',
                fullname: '宁陕县'
            },
            {
                id: '610924',
                fullname: '紫阳县'
            },
            {
                id: '610925',
                fullname: '岚皋县'
            },
            {
                id: '610926',
                fullname: '平利县'
            },
            {
                id: '610927',
                fullname: '镇坪县'
            },
            {
                id: '610929',
                fullname: '白河县'
            },
            {
                id: '610981',
                fullname: '旬阳市'
            }
        ],
        [
            {
                id: '611002',
                fullname: '商州区'
            },
            {
                id: '611021',
                fullname: '洛南县'
            },
            {
                id: '611022',
                fullname: '丹凤县'
            },
            {
                id: '611023',
                fullname: '商南县'
            },
            {
                id: '611024',
                fullname: '山阳县'
            },
            {
                id: '611025',
                fullname: '镇安县'
            },
            {
                id: '611026',
                fullname: '柞水县'
            }
        ]
    ],
    [
        [
            {
                id: '620102',
                fullname: '城关区'
            },
            {
                id: '620103',
                fullname: '七里河区'
            },
            {
                id: '620104',
                fullname: '西固区'
            },
            {
                id: '620105',
                fullname: '安宁区'
            },
            {
                id: '620111',
                fullname: '红古区'
            },
            {
                id: '620121',
                fullname: '永登县'
            },
            {
                id: '620122',
                fullname: '皋兰县'
            },
            {
                id: '620123',
                fullname: '榆中县'
            }
        ],
        [
            {
                id: '620299',
                fullname: '嘉峪关市'
            }
        ],
        [
            {
                id: '620302',
                fullname: '金川区'
            },
            {
                id: '620321',
                fullname: '永昌县'
            }
        ],
        [
            {
                id: '620402',
                fullname: '白银区'
            },
            {
                id: '620403',
                fullname: '平川区'
            },
            {
                id: '620421',
                fullname: '靖远县'
            },
            {
                id: '620422',
                fullname: '会宁县'
            },
            {
                id: '620423',
                fullname: '景泰县'
            }
        ],
        [
            {
                id: '620502',
                fullname: '秦州区'
            },
            {
                id: '620503',
                fullname: '麦积区'
            },
            {
                id: '620521',
                fullname: '清水县'
            },
            {
                id: '620522',
                fullname: '秦安县'
            },
            {
                id: '620523',
                fullname: '甘谷县'
            },
            {
                id: '620524',
                fullname: '武山县'
            },
            {
                id: '620525',
                fullname: '张家川回族自治县'
            }
        ],
        [
            {
                id: '620602',
                fullname: '凉州区'
            },
            {
                id: '620621',
                fullname: '民勤县'
            },
            {
                id: '620622',
                fullname: '古浪县'
            },
            {
                id: '620623',
                fullname: '天祝藏族自治县'
            }
        ],
        [
            {
                id: '620702',
                fullname: '甘州区'
            },
            {
                id: '620721',
                fullname: '肃南裕固族自治县'
            },
            {
                id: '620722',
                fullname: '民乐县'
            },
            {
                id: '620723',
                fullname: '临泽县'
            },
            {
                id: '620724',
                fullname: '高台县'
            },
            {
                id: '620725',
                fullname: '山丹县'
            }
        ],
        [
            {
                id: '620802',
                fullname: '崆峒区'
            },
            {
                id: '620821',
                fullname: '泾川县'
            },
            {
                id: '620822',
                fullname: '灵台县'
            },
            {
                id: '620823',
                fullname: '崇信县'
            },
            {
                id: '620825',
                fullname: '庄浪县'
            },
            {
                id: '620826',
                fullname: '静宁县'
            },
            {
                id: '620881',
                fullname: '华亭市'
            }
        ],
        [
            {
                id: '620902',
                fullname: '肃州区'
            },
            {
                id: '620921',
                fullname: '金塔县'
            },
            {
                id: '620922',
                fullname: '瓜州县'
            },
            {
                id: '620923',
                fullname: '肃北蒙古族自治县'
            },
            {
                id: '620924',
                fullname: '阿克塞哈萨克族自治县'
            },
            {
                id: '620981',
                fullname: '玉门市'
            },
            {
                id: '620982',
                fullname: '敦煌市'
            }
        ],
        [
            {
                id: '621002',
                fullname: '西峰区'
            },
            {
                id: '621021',
                fullname: '庆城县'
            },
            {
                id: '621022',
                fullname: '环县'
            },
            {
                id: '621023',
                fullname: '华池县'
            },
            {
                id: '621024',
                fullname: '合水县'
            },
            {
                id: '621025',
                fullname: '正宁县'
            },
            {
                id: '621026',
                fullname: '宁县'
            },
            {
                id: '621027',
                fullname: '镇原县'
            }
        ],
        [
            {
                id: '621102',
                fullname: '安定区'
            },
            {
                id: '621121',
                fullname: '通渭县'
            },
            {
                id: '621122',
                fullname: '陇西县'
            },
            {
                id: '621123',
                fullname: '渭源县'
            },
            {
                id: '621124',
                fullname: '临洮县'
            },
            {
                id: '621125',
                fullname: '漳县'
            },
            {
                id: '621126',
                fullname: '岷县'
            }
        ],
        [
            {
                id: '621202',
                fullname: '武都区'
            },
            {
                id: '621221',
                fullname: '成县'
            },
            {
                id: '621222',
                fullname: '文县'
            },
            {
                id: '621223',
                fullname: '宕昌县'
            },
            {
                id: '621224',
                fullname: '康县'
            },
            {
                id: '621225',
                fullname: '西和县'
            },
            {
                id: '621226',
                fullname: '礼县'
            },
            {
                id: '621227',
                fullname: '徽县'
            },
            {
                id: '621228',
                fullname: '两当县'
            }
        ],
        [
            {
                id: '622901',
                fullname: '临夏市'
            },
            {
                id: '622921',
                fullname: '临夏县'
            },
            {
                id: '622922',
                fullname: '康乐县'
            },
            {
                id: '622923',
                fullname: '永靖县'
            },
            {
                id: '622924',
                fullname: '广河县'
            },
            {
                id: '622925',
                fullname: '和政县'
            },
            {
                id: '622926',
                fullname: '东乡族自治县'
            },
            {
                id: '622927',
                fullname: '积石山保安族东乡族撒拉族自治县'
            }
        ],
        [
            {
                id: '623001',
                fullname: '合作市'
            },
            {
                id: '623021',
                fullname: '临潭县'
            },
            {
                id: '623022',
                fullname: '卓尼县'
            },
            {
                id: '623023',
                fullname: '舟曲县'
            },
            {
                id: '623024',
                fullname: '迭部县'
            },
            {
                id: '623025',
                fullname: '玛曲县'
            },
            {
                id: '623026',
                fullname: '碌曲县'
            },
            {
                id: '623027',
                fullname: '夏河县'
            }
        ]
    ],
    [
        [
            {
                id: '630102',
                fullname: '城东区'
            },
            {
                id: '630103',
                fullname: '城中区'
            },
            {
                id: '630104',
                fullname: '城西区'
            },
            {
                id: '630105',
                fullname: '城北区'
            },
            {
                id: '630106',
                fullname: '湟中区'
            },
            {
                id: '630121',
                fullname: '大通回族土族自治县'
            },
            {
                id: '630123',
                fullname: '湟源县'
            }
        ],
        [
            {
                id: '630202',
                fullname: '乐都区'
            },
            {
                id: '630203',
                fullname: '平安区'
            },
            {
                id: '630222',
                fullname: '民和回族土族自治县'
            },
            {
                id: '630223',
                fullname: '互助土族自治县'
            },
            {
                id: '630224',
                fullname: '化隆回族自治县'
            },
            {
                id: '630225',
                fullname: '循化撒拉族自治县'
            }
        ],
        [
            {
                id: '632221',
                fullname: '门源回族自治县'
            },
            {
                id: '632222',
                fullname: '祁连县'
            },
            {
                id: '632223',
                fullname: '海晏县'
            },
            {
                id: '632224',
                fullname: '刚察县'
            }
        ],
        [
            {
                id: '632301',
                fullname: '同仁市'
            },
            {
                id: '632322',
                fullname: '尖扎县'
            },
            {
                id: '632323',
                fullname: '泽库县'
            },
            {
                id: '632324',
                fullname: '河南蒙古族自治县'
            }
        ],
        [
            {
                id: '632521',
                fullname: '共和县'
            },
            {
                id: '632522',
                fullname: '同德县'
            },
            {
                id: '632523',
                fullname: '贵德县'
            },
            {
                id: '632524',
                fullname: '兴海县'
            },
            {
                id: '632525',
                fullname: '贵南县'
            }
        ],
        [
            {
                id: '632621',
                fullname: '玛沁县'
            },
            {
                id: '632622',
                fullname: '班玛县'
            },
            {
                id: '632623',
                fullname: '甘德县'
            },
            {
                id: '632624',
                fullname: '达日县'
            },
            {
                id: '632625',
                fullname: '久治县'
            },
            {
                id: '632626',
                fullname: '玛多县'
            }
        ],
        [
            {
                id: '632701',
                fullname: '玉树市'
            },
            {
                id: '632722',
                fullname: '杂多县'
            },
            {
                id: '632723',
                fullname: '称多县'
            },
            {
                id: '632724',
                fullname: '治多县'
            },
            {
                id: '632725',
                fullname: '囊谦县'
            },
            {
                id: '632726',
                fullname: '曲麻莱县'
            }
        ],
        [
            {
                id: '632801',
                fullname: '格尔木市'
            },
            {
                id: '632802',
                fullname: '德令哈市'
            },
            {
                id: '632803',
                fullname: '茫崖市'
            },
            {
                id: '632821',
                fullname: '乌兰县'
            },
            {
                id: '632822',
                fullname: '都兰县'
            },
            {
                id: '632823',
                fullname: '天峻县'
            },
            {
                id: '632825',
                fullname: '大柴旦行政委员会'
            }
        ]
    ],
    [
        [
            {
                id: '640104',
                fullname: '兴庆区'
            },
            {
                id: '640105',
                fullname: '西夏区'
            },
            {
                id: '640106',
                fullname: '金凤区'
            },
            {
                id: '640121',
                fullname: '永宁县'
            },
            {
                id: '640122',
                fullname: '贺兰县'
            },
            {
                id: '640181',
                fullname: '灵武市'
            }
        ],
        [
            {
                id: '640202',
                fullname: '大武口区'
            },
            {
                id: '640205',
                fullname: '惠农区'
            },
            {
                id: '640221',
                fullname: '平罗县'
            }
        ],
        [
            {
                id: '640302',
                fullname: '利通区'
            },
            {
                id: '640303',
                fullname: '红寺堡区'
            },
            {
                id: '640323',
                fullname: '盐池县'
            },
            {
                id: '640324',
                fullname: '同心县'
            },
            {
                id: '640381',
                fullname: '青铜峡市'
            }
        ],
        [
            {
                id: '640402',
                fullname: '原州区'
            },
            {
                id: '640422',
                fullname: '西吉县'
            },
            {
                id: '640423',
                fullname: '隆德县'
            },
            {
                id: '640424',
                fullname: '泾源县'
            },
            {
                id: '640425',
                fullname: '彭阳县'
            }
        ],
        [
            {
                id: '640502',
                fullname: '沙坡头区'
            },
            {
                id: '640521',
                fullname: '中宁县'
            },
            {
                id: '640522',
                fullname: '海原县'
            }
        ]
    ],
    [
        [
            {
                id: '650102',
                fullname: '天山区'
            },
            {
                id: '650103',
                fullname: '沙依巴克区'
            },
            {
                id: '650104',
                fullname: '新市区'
            },
            {
                id: '650105',
                fullname: '水磨沟区'
            },
            {
                id: '650106',
                fullname: '头屯河区'
            },
            {
                id: '650107',
                fullname: '达坂城区'
            },
            {
                id: '650109',
                fullname: '米东区'
            },
            {
                id: '650121',
                fullname: '乌鲁木齐县'
            }
        ],
        [
            {
                id: '650202',
                fullname: '独山子区'
            },
            {
                id: '650203',
                fullname: '克拉玛依区'
            },
            {
                id: '650204',
                fullname: '白碱滩区'
            },
            {
                id: '650205',
                fullname: '乌尔禾区'
            }
        ],
        [
            {
                id: '650402',
                fullname: '高昌区'
            },
            {
                id: '650421',
                fullname: '鄯善县'
            },
            {
                id: '650422',
                fullname: '托克逊县'
            }
        ],
        [
            {
                id: '650502',
                fullname: '伊州区'
            },
            {
                id: '650521',
                fullname: '巴里坤哈萨克自治县'
            },
            {
                id: '650522',
                fullname: '伊吾县'
            }
        ],
        [
            {
                id: '652301',
                fullname: '昌吉市'
            },
            {
                id: '652302',
                fullname: '阜康市'
            },
            {
                id: '652323',
                fullname: '呼图壁县'
            },
            {
                id: '652324',
                fullname: '玛纳斯县'
            },
            {
                id: '652325',
                fullname: '奇台县'
            },
            {
                id: '652327',
                fullname: '吉木萨尔县'
            },
            {
                id: '652328',
                fullname: '木垒哈萨克自治县'
            }
        ],
        [
            {
                id: '652701',
                fullname: '博乐市'
            },
            {
                id: '652702',
                fullname: '阿拉山口市'
            },
            {
                id: '652722',
                fullname: '精河县'
            },
            {
                id: '652723',
                fullname: '温泉县'
            }
        ],
        [
            {
                id: '652801',
                fullname: '库尔勒市'
            },
            {
                id: '652822',
                fullname: '轮台县'
            },
            {
                id: '652823',
                fullname: '尉犁县'
            },
            {
                id: '652824',
                fullname: '若羌县'
            },
            {
                id: '652825',
                fullname: '且末县'
            },
            {
                id: '652826',
                fullname: '焉耆回族自治县'
            },
            {
                id: '652827',
                fullname: '和静县'
            },
            {
                id: '652828',
                fullname: '和硕县'
            },
            {
                id: '652829',
                fullname: '博湖县'
            }
        ],
        [
            {
                id: '652901',
                fullname: '阿克苏市'
            },
            {
                id: '652902',
                fullname: '库车市'
            },
            {
                id: '652922',
                fullname: '温宿县'
            },
            {
                id: '652924',
                fullname: '沙雅县'
            },
            {
                id: '652925',
                fullname: '新和县'
            },
            {
                id: '652926',
                fullname: '拜城县'
            },
            {
                id: '652927',
                fullname: '乌什县'
            },
            {
                id: '652928',
                fullname: '阿瓦提县'
            },
            {
                id: '652929',
                fullname: '柯坪县'
            }
        ],
        [
            {
                id: '653001',
                fullname: '阿图什市'
            },
            {
                id: '653022',
                fullname: '阿克陶县'
            },
            {
                id: '653023',
                fullname: '阿合奇县'
            },
            {
                id: '653024',
                fullname: '乌恰县'
            }
        ],
        [
            {
                id: '653101',
                fullname: '喀什市'
            },
            {
                id: '653121',
                fullname: '疏附县'
            },
            {
                id: '653122',
                fullname: '疏勒县'
            },
            {
                id: '653123',
                fullname: '英吉沙县'
            },
            {
                id: '653124',
                fullname: '泽普县'
            },
            {
                id: '653125',
                fullname: '莎车县'
            },
            {
                id: '653126',
                fullname: '叶城县'
            },
            {
                id: '653127',
                fullname: '麦盖提县'
            },
            {
                id: '653128',
                fullname: '岳普湖县'
            },
            {
                id: '653129',
                fullname: '伽师县'
            },
            {
                id: '653130',
                fullname: '巴楚县'
            },
            {
                id: '653131',
                fullname: '塔什库尔干塔吉克自治县'
            }
        ],
        [
            {
                id: '653201',
                fullname: '和田市'
            },
            {
                id: '653221',
                fullname: '和田县'
            },
            {
                id: '653222',
                fullname: '墨玉县'
            },
            {
                id: '653223',
                fullname: '皮山县'
            },
            {
                id: '653224',
                fullname: '洛浦县'
            },
            {
                id: '653225',
                fullname: '策勒县'
            },
            {
                id: '653226',
                fullname: '于田县'
            },
            {
                id: '653227',
                fullname: '民丰县'
            }
        ],
        [
            {
                id: '654002',
                fullname: '伊宁市'
            },
            {
                id: '654003',
                fullname: '奎屯市'
            },
            {
                id: '654004',
                fullname: '霍尔果斯市'
            },
            {
                id: '654021',
                fullname: '伊宁县'
            },
            {
                id: '654022',
                fullname: '察布查尔锡伯自治县'
            },
            {
                id: '654023',
                fullname: '霍城县'
            },
            {
                id: '654024',
                fullname: '巩留县'
            },
            {
                id: '654025',
                fullname: '新源县'
            },
            {
                id: '654026',
                fullname: '昭苏县'
            },
            {
                id: '654027',
                fullname: '特克斯县'
            },
            {
                id: '654028',
                fullname: '尼勒克县'
            }
        ],
        [
            {
                id: '654201',
                fullname: '塔城市'
            },
            {
                id: '654202',
                fullname: '乌苏市'
            },
            {
                id: '654203',
                fullname: '沙湾市'
            },
            {
                id: '654221',
                fullname: '额敏县'
            },
            {
                id: '654224',
                fullname: '托里县'
            },
            {
                id: '654225',
                fullname: '裕民县'
            },
            {
                id: '654226',
                fullname: '和布克赛尔蒙古自治县'
            }
        ],
        [
            {
                id: '654301',
                fullname: '阿勒泰市'
            },
            {
                id: '654321',
                fullname: '布尔津县'
            },
            {
                id: '654322',
                fullname: '富蕴县'
            },
            {
                id: '654323',
                fullname: '福海县'
            },
            {
                id: '654324',
                fullname: '哈巴河县'
            },
            {
                id: '654325',
                fullname: '青河县'
            },
            {
                id: '654326',
                fullname: '吉木乃县'
            }
        ]
    ],
    [
        [
            {
                id: '711001',
                fullname: '松山区'
            },
            {
                id: '711002',
                fullname: '大安区'
            },
            {
                id: '711003',
                fullname: '中正区'
            },
            {
                id: '711005',
                fullname: '万华区'
            },
            {
                id: '711009',
                fullname: '大同区'
            },
            {
                id: '711010',
                fullname: '中山区'
            },
            {
                id: '711011',
                fullname: '文山区'
            },
            {
                id: '711013',
                fullname: '南港区'
            },
            {
                id: '711014',
                fullname: '内湖区'
            },
            {
                id: '711015',
                fullname: '士林区'
            },
            {
                id: '711016',
                fullname: '北投区'
            },
            {
                id: '711017',
                fullname: '信义区'
            }
        ],
        [
            {
                id: '711101',
                fullname: '中区'
            },
            {
                id: '711102',
                fullname: '东区'
            },
            {
                id: '711103',
                fullname: '西区'
            },
            {
                id: '711104',
                fullname: '南区'
            },
            {
                id: '711105',
                fullname: '北区'
            },
            {
                id: '711106',
                fullname: '西屯区'
            },
            {
                id: '711107',
                fullname: '南屯区'
            },
            {
                id: '711108',
                fullname: '北屯区'
            },
            {
                id: '711141',
                fullname: '丰原区'
            },
            {
                id: '711142',
                fullname: '东势区'
            },
            {
                id: '711143',
                fullname: '大甲区'
            },
            {
                id: '711144',
                fullname: '清水区'
            },
            {
                id: '711145',
                fullname: '沙鹿区'
            },
            {
                id: '711146',
                fullname: '梧栖区'
            },
            {
                id: '711147',
                fullname: '神冈区'
            },
            {
                id: '711148',
                fullname: '后里区'
            },
            {
                id: '711149',
                fullname: '大雅区'
            },
            {
                id: '711150',
                fullname: '潭子区'
            },
            {
                id: '711151',
                fullname: '新社区'
            },
            {
                id: '711152',
                fullname: '石冈区'
            },
            {
                id: '711153',
                fullname: '外埔区'
            },
            {
                id: '711154',
                fullname: '大安区'
            },
            {
                id: '711155',
                fullname: '乌日区'
            },
            {
                id: '711156',
                fullname: '大肚区'
            },
            {
                id: '711157',
                fullname: '龙井区'
            },
            {
                id: '711158',
                fullname: '雾峰区'
            },
            {
                id: '711159',
                fullname: '太平区'
            },
            {
                id: '711160',
                fullname: '大里区'
            },
            {
                id: '711161',
                fullname: '和平区'
            }
        ],
        [
            {
                id: '711201',
                fullname: '中正区'
            },
            {
                id: '711202',
                fullname: '七堵区'
            },
            {
                id: '711203',
                fullname: '暖暖区'
            },
            {
                id: '711204',
                fullname: '仁爱区'
            },
            {
                id: '711205',
                fullname: '中山区'
            },
            {
                id: '711206',
                fullname: '安乐区'
            },
            {
                id: '711207',
                fullname: '信义区'
            }
        ],
        [
            {
                id: '711301',
                fullname: '东区'
            },
            {
                id: '711302',
                fullname: '南区'
            },
            {
                id: '711304',
                fullname: '北区'
            },
            {
                id: '711306',
                fullname: '安南区'
            },
            {
                id: '711307',
                fullname: '安平区'
            },
            {
                id: '711308',
                fullname: '中西区'
            },
            {
                id: '711341',
                fullname: '新营区'
            },
            {
                id: '711342',
                fullname: '盐水区'
            },
            {
                id: '711343',
                fullname: '白河区'
            },
            {
                id: '711344',
                fullname: '柳营区'
            },
            {
                id: '711345',
                fullname: '后壁区'
            },
            {
                id: '711346',
                fullname: '东山区'
            },
            {
                id: '711347',
                fullname: '麻豆区'
            },
            {
                id: '711348',
                fullname: '下营区'
            },
            {
                id: '711349',
                fullname: '六甲区'
            },
            {
                id: '711350',
                fullname: '官田区'
            },
            {
                id: '711351',
                fullname: '大内区'
            },
            {
                id: '711352',
                fullname: '佳里区'
            },
            {
                id: '711353',
                fullname: '西港区'
            },
            {
                id: '711354',
                fullname: '七股区'
            },
            {
                id: '711355',
                fullname: '将军区'
            },
            {
                id: '711356',
                fullname: '北门区'
            },
            {
                id: '711357',
                fullname: '学甲区'
            },
            {
                id: '711358',
                fullname: '新化区'
            },
            {
                id: '711359',
                fullname: '善化区'
            },
            {
                id: '711360',
                fullname: '新市区'
            },
            {
                id: '711361',
                fullname: '安定区'
            },
            {
                id: '711362',
                fullname: '山上区'
            },
            {
                id: '711363',
                fullname: '玉井区'
            },
            {
                id: '711364',
                fullname: '楠西区'
            },
            {
                id: '711365',
                fullname: '南化区'
            },
            {
                id: '711366',
                fullname: '左镇区'
            },
            {
                id: '711367',
                fullname: '仁德区'
            },
            {
                id: '711368',
                fullname: '归仁区'
            },
            {
                id: '711369',
                fullname: '关庙区'
            },
            {
                id: '711370',
                fullname: '龙崎区'
            },
            {
                id: '711371',
                fullname: '永康区'
            }
        ],
        [
            {
                id: '711401',
                fullname: '盐埕区'
            },
            {
                id: '711402',
                fullname: '鼓山区'
            },
            {
                id: '711403',
                fullname: '左营区'
            },
            {
                id: '711404',
                fullname: '楠梓区'
            },
            {
                id: '711405',
                fullname: '三民区'
            },
            {
                id: '711406',
                fullname: '新兴区'
            },
            {
                id: '711407',
                fullname: '前金区'
            },
            {
                id: '711408',
                fullname: '苓雅区'
            },
            {
                id: '711409',
                fullname: '前镇区'
            },
            {
                id: '711410',
                fullname: '旗津区'
            },
            {
                id: '711411',
                fullname: '小港区'
            },
            {
                id: '711441',
                fullname: '凤山区'
            },
            {
                id: '711442',
                fullname: '鸟松区'
            },
            {
                id: '711443',
                fullname: '仁武区'
            },
            {
                id: '711444',
                fullname: '大社区'
            },
            {
                id: '711445',
                fullname: '大树区'
            },
            {
                id: '711446',
                fullname: '大寮区'
            },
            {
                id: '711448',
                fullname: '林园区'
            },
            {
                id: '711449',
                fullname: '冈山区'
            },
            {
                id: '711450',
                fullname: '茄萣区'
            },
            {
                id: '711451',
                fullname: '永安区'
            },
            {
                id: '711452',
                fullname: '桥头区'
            },
            {
                id: '711453',
                fullname: '梓官区'
            },
            {
                id: '711454',
                fullname: '田寮区'
            },
            {
                id: '711455',
                fullname: '阿莲区'
            },
            {
                id: '711456',
                fullname: '路竹区'
            },
            {
                id: '711457',
                fullname: '燕巢区'
            },
            {
                id: '711458',
                fullname: '弥陀区'
            },
            {
                id: '711459',
                fullname: '湖内区'
            },
            {
                id: '711460',
                fullname: '旗山区'
            },
            {
                id: '711461',
                fullname: '六龟区'
            },
            {
                id: '711462',
                fullname: '内门区'
            },
            {
                id: '711463',
                fullname: '美浓区'
            },
            {
                id: '711464',
                fullname: '杉林区'
            },
            {
                id: '711465',
                fullname: '甲仙区'
            },
            {
                id: '711466',
                fullname: '茂林区'
            },
            {
                id: '711467',
                fullname: '桃源区'
            },
            {
                id: '711468',
                fullname: '那玛夏区'
            }
        ],
        [
            {
                id: '711501',
                fullname: '新庄区'
            },
            {
                id: '711502',
                fullname: '林口区'
            },
            {
                id: '711503',
                fullname: '五股区'
            },
            {
                id: '711504',
                fullname: '芦洲区'
            },
            {
                id: '711505',
                fullname: '三重区'
            },
            {
                id: '711506',
                fullname: '泰山区'
            },
            {
                id: '711507',
                fullname: '新店区'
            },
            {
                id: '711508',
                fullname: '石碇区'
            },
            {
                id: '711509',
                fullname: '深坑区'
            },
            {
                id: '711510',
                fullname: '坪林区'
            },
            {
                id: '711511',
                fullname: '乌来区'
            },
            {
                id: '711514',
                fullname: '板桥区'
            },
            {
                id: '711515',
                fullname: '三峡区'
            },
            {
                id: '711516',
                fullname: '莺歌区'
            },
            {
                id: '711517',
                fullname: '树林区'
            },
            {
                id: '711518',
                fullname: '中和区'
            },
            {
                id: '711519',
                fullname: '土城区'
            },
            {
                id: '711521',
                fullname: '瑞芳区'
            },
            {
                id: '711522',
                fullname: '平溪区'
            },
            {
                id: '711523',
                fullname: '双溪区'
            },
            {
                id: '711524',
                fullname: '贡寮区'
            },
            {
                id: '711525',
                fullname: '金山区'
            },
            {
                id: '711526',
                fullname: '万里区'
            },
            {
                id: '711527',
                fullname: '淡水区'
            },
            {
                id: '711528',
                fullname: '汐止区'
            },
            {
                id: '711530',
                fullname: '三芝区'
            },
            {
                id: '711531',
                fullname: '石门区'
            },
            {
                id: '711532',
                fullname: '八里区'
            },
            {
                id: '711533',
                fullname: '永和区'
            }
        ],
        [
            {
                id: '711601',
                fullname: '宜兰市'
            },
            {
                id: '711602',
                fullname: '头城镇'
            },
            {
                id: '711603',
                fullname: '礁溪乡'
            },
            {
                id: '711604',
                fullname: '壮围乡'
            },
            {
                id: '711605',
                fullname: '员山乡'
            },
            {
                id: '711606',
                fullname: '罗东镇'
            },
            {
                id: '711607',
                fullname: '五结乡'
            },
            {
                id: '711608',
                fullname: '冬山乡'
            },
            {
                id: '711609',
                fullname: '苏澳镇'
            },
            {
                id: '711610',
                fullname: '三星乡'
            },
            {
                id: '711611',
                fullname: '大同乡'
            },
            {
                id: '711612',
                fullname: '南澳乡'
            }
        ],
        [
            {
                id: '711701',
                fullname: '桃园区'
            },
            {
                id: '711702',
                fullname: '大溪区'
            },
            {
                id: '711703',
                fullname: '中坜区'
            },
            {
                id: '711704',
                fullname: '杨梅区'
            },
            {
                id: '711705',
                fullname: '芦竹区'
            },
            {
                id: '711706',
                fullname: '大园区'
            },
            {
                id: '711707',
                fullname: '龟山区'
            },
            {
                id: '711708',
                fullname: '八德区'
            },
            {
                id: '711709',
                fullname: '龙潭区'
            },
            {
                id: '711710',
                fullname: '平镇区'
            },
            {
                id: '711711',
                fullname: '新屋区'
            },
            {
                id: '711712',
                fullname: '观音区'
            },
            {
                id: '711713',
                fullname: '复兴区'
            }
        ],
        [
            {
                id: '711801',
                fullname: '东区'
            },
            {
                id: '711802',
                fullname: '西区'
            }
        ],
        [
            {
                id: '711902',
                fullname: '竹东镇'
            },
            {
                id: '711903',
                fullname: '关西镇'
            },
            {
                id: '711904',
                fullname: '新埔镇'
            },
            {
                id: '711905',
                fullname: '竹北市'
            },
            {
                id: '711906',
                fullname: '湖口乡'
            },
            {
                id: '711908',
                fullname: '横山乡'
            },
            {
                id: '711909',
                fullname: '新丰乡'
            },
            {
                id: '711910',
                fullname: '芎林乡'
            },
            {
                id: '711911',
                fullname: '宝山乡'
            },
            {
                id: '711912',
                fullname: '北埔乡'
            },
            {
                id: '711913',
                fullname: '峨眉乡'
            },
            {
                id: '711914',
                fullname: '尖石乡'
            },
            {
                id: '711915',
                fullname: '五峰乡'
            }
        ],
        [
            {
                id: '712001',
                fullname: '苗栗市'
            },
            {
                id: '712002',
                fullname: '苑里镇'
            },
            {
                id: '712003',
                fullname: '通霄镇'
            },
            {
                id: '712004',
                fullname: '公馆乡'
            },
            {
                id: '712005',
                fullname: '铜锣乡'
            },
            {
                id: '712006',
                fullname: '三义乡'
            },
            {
                id: '712007',
                fullname: '西湖乡'
            },
            {
                id: '712008',
                fullname: '头屋乡'
            },
            {
                id: '712009',
                fullname: '竹南镇'
            },
            {
                id: '712010',
                fullname: '头份市'
            },
            {
                id: '712011',
                fullname: '造桥乡'
            },
            {
                id: '712012',
                fullname: '后龙镇'
            },
            {
                id: '712013',
                fullname: '三湾乡'
            },
            {
                id: '712014',
                fullname: '南庄乡'
            },
            {
                id: '712015',
                fullname: '大湖乡'
            },
            {
                id: '712016',
                fullname: '卓兰镇'
            },
            {
                id: '712017',
                fullname: '狮潭乡'
            },
            {
                id: '712018',
                fullname: '泰安乡'
            }
        ],
        [
            {
                id: '712201',
                fullname: '南投市'
            },
            {
                id: '712202',
                fullname: '埔里镇'
            },
            {
                id: '712203',
                fullname: '草屯镇'
            },
            {
                id: '712204',
                fullname: '竹山镇'
            },
            {
                id: '712205',
                fullname: '集集镇'
            },
            {
                id: '712206',
                fullname: '名间乡'
            },
            {
                id: '712207',
                fullname: '鹿谷乡'
            },
            {
                id: '712208',
                fullname: '中寮乡'
            },
            {
                id: '712209',
                fullname: '鱼池乡'
            },
            {
                id: '712210',
                fullname: '国姓乡'
            },
            {
                id: '712211',
                fullname: '水里乡'
            },
            {
                id: '712212',
                fullname: '信义乡'
            },
            {
                id: '712213',
                fullname: '仁爱乡'
            }
        ],
        [
            {
                id: '712301',
                fullname: '彰化市'
            },
            {
                id: '712302',
                fullname: '鹿港镇'
            },
            {
                id: '712303',
                fullname: '和美镇'
            },
            {
                id: '712304',
                fullname: '北斗镇'
            },
            {
                id: '712305',
                fullname: '员林市'
            },
            {
                id: '712306',
                fullname: '溪湖镇'
            },
            {
                id: '712307',
                fullname: '田中镇'
            },
            {
                id: '712308',
                fullname: '二林镇'
            },
            {
                id: '712309',
                fullname: '线西乡'
            },
            {
                id: '712310',
                fullname: '伸港乡'
            },
            {
                id: '712311',
                fullname: '福兴乡'
            },
            {
                id: '712312',
                fullname: '秀水乡'
            },
            {
                id: '712313',
                fullname: '花坛乡'
            },
            {
                id: '712314',
                fullname: '芬园乡'
            },
            {
                id: '712315',
                fullname: '大村乡'
            },
            {
                id: '712316',
                fullname: '埔盐乡'
            },
            {
                id: '712317',
                fullname: '埔心乡'
            },
            {
                id: '712318',
                fullname: '永靖乡'
            },
            {
                id: '712319',
                fullname: '社头乡'
            },
            {
                id: '712320',
                fullname: '二水乡'
            },
            {
                id: '712321',
                fullname: '田尾乡'
            },
            {
                id: '712322',
                fullname: '埤头乡'
            },
            {
                id: '712323',
                fullname: '芳苑乡'
            },
            {
                id: '712324',
                fullname: '大城乡'
            },
            {
                id: '712325',
                fullname: '竹塘乡'
            },
            {
                id: '712326',
                fullname: '溪州乡'
            }
        ],
        [
            {
                id: '712401',
                fullname: '东区'
            },
            {
                id: '712402',
                fullname: '香山区'
            },
            {
                id: '712403',
                fullname: '北区'
            }
        ],
        [
            {
                id: '712501',
                fullname: '斗六市'
            },
            {
                id: '712502',
                fullname: '斗南镇'
            },
            {
                id: '712503',
                fullname: '虎尾镇'
            },
            {
                id: '712504',
                fullname: '西螺镇'
            },
            {
                id: '712505',
                fullname: '土库镇'
            },
            {
                id: '712506',
                fullname: '北港镇'
            },
            {
                id: '712507',
                fullname: '古坑乡'
            },
            {
                id: '712508',
                fullname: '大埤乡'
            },
            {
                id: '712509',
                fullname: '莿桐乡'
            },
            {
                id: '712510',
                fullname: '林内乡'
            },
            {
                id: '712511',
                fullname: '二仑乡'
            },
            {
                id: '712512',
                fullname: '仑背乡'
            },
            {
                id: '712513',
                fullname: '麦寮乡'
            },
            {
                id: '712514',
                fullname: '东势乡'
            },
            {
                id: '712515',
                fullname: '褒忠乡'
            },
            {
                id: '712516',
                fullname: '台西乡'
            },
            {
                id: '712517',
                fullname: '元长乡'
            },
            {
                id: '712518',
                fullname: '四湖乡'
            },
            {
                id: '712519',
                fullname: '口湖乡'
            },
            {
                id: '712520',
                fullname: '水林乡'
            }
        ],
        [
            {
                id: '712602',
                fullname: '朴子市'
            },
            {
                id: '712603',
                fullname: '布袋镇'
            },
            {
                id: '712604',
                fullname: '大林镇'
            },
            {
                id: '712605',
                fullname: '民雄乡'
            },
            {
                id: '712606',
                fullname: '溪口乡'
            },
            {
                id: '712607',
                fullname: '新港乡'
            },
            {
                id: '712608',
                fullname: '六脚乡'
            },
            {
                id: '712609',
                fullname: '东石乡'
            },
            {
                id: '712610',
                fullname: '义竹乡'
            },
            {
                id: '712611',
                fullname: '鹿草乡'
            },
            {
                id: '712612',
                fullname: '太保市'
            },
            {
                id: '712613',
                fullname: '水上乡'
            },
            {
                id: '712614',
                fullname: '中埔乡'
            },
            {
                id: '712615',
                fullname: '竹崎乡'
            },
            {
                id: '712616',
                fullname: '梅山乡'
            },
            {
                id: '712617',
                fullname: '番路乡'
            },
            {
                id: '712618',
                fullname: '大埔乡'
            },
            {
                id: '712620',
                fullname: '阿里山乡'
            }
        ],
        [
            {
                id: '712901',
                fullname: '屏东市'
            },
            {
                id: '712902',
                fullname: '潮州镇'
            },
            {
                id: '712903',
                fullname: '东港镇'
            },
            {
                id: '712904',
                fullname: '恒春镇'
            },
            {
                id: '712905',
                fullname: '万丹乡'
            },
            {
                id: '712906',
                fullname: '长治乡'
            },
            {
                id: '712907',
                fullname: '麟洛乡'
            },
            {
                id: '712908',
                fullname: '九如乡'
            },
            {
                id: '712909',
                fullname: '里港乡'
            },
            {
                id: '712910',
                fullname: '盐埔乡'
            },
            {
                id: '712911',
                fullname: '高树乡'
            },
            {
                id: '712912',
                fullname: '万峦乡'
            },
            {
                id: '712913',
                fullname: '内埔乡'
            },
            {
                id: '712914',
                fullname: '竹田乡'
            },
            {
                id: '712915',
                fullname: '新埤乡'
            },
            {
                id: '712916',
                fullname: '枋寮乡'
            },
            {
                id: '712917',
                fullname: '新园乡'
            },
            {
                id: '712918',
                fullname: '崁顶乡'
            },
            {
                id: '712919',
                fullname: '林边乡'
            },
            {
                id: '712920',
                fullname: '南州乡'
            },
            {
                id: '712921',
                fullname: '佳冬乡'
            },
            {
                id: '712922',
                fullname: '琉球乡'
            },
            {
                id: '712923',
                fullname: '车城乡'
            },
            {
                id: '712924',
                fullname: '满州乡'
            },
            {
                id: '712925',
                fullname: '枋山乡'
            },
            {
                id: '712926',
                fullname: '三地门乡'
            },
            {
                id: '712927',
                fullname: '雾台乡'
            },
            {
                id: '712928',
                fullname: '玛家乡'
            },
            {
                id: '712929',
                fullname: '泰武乡'
            },
            {
                id: '712930',
                fullname: '来义乡'
            },
            {
                id: '712931',
                fullname: '春日乡'
            },
            {
                id: '712932',
                fullname: '狮子乡'
            },
            {
                id: '712933',
                fullname: '牡丹乡'
            }
        ],
        [
            {
                id: '713001',
                fullname: '花莲市'
            },
            {
                id: '713002',
                fullname: '光复乡'
            },
            {
                id: '713003',
                fullname: '玉里镇'
            },
            {
                id: '713004',
                fullname: '新城乡'
            },
            {
                id: '713005',
                fullname: '吉安乡'
            },
            {
                id: '713006',
                fullname: '寿丰乡'
            },
            {
                id: '713007',
                fullname: '凤林镇'
            },
            {
                id: '713008',
                fullname: '丰滨乡'
            },
            {
                id: '713009',
                fullname: '瑞穗乡'
            },
            {
                id: '713010',
                fullname: '富里乡'
            },
            {
                id: '713011',
                fullname: '卓溪乡'
            },
            {
                id: '713012',
                fullname: '万荣乡'
            },
            {
                id: '713013',
                fullname: '秀林乡'
            }
        ],
        [
            {
                id: '713101',
                fullname: '台东市'
            },
            {
                id: '713102',
                fullname: '成功镇'
            },
            {
                id: '713103',
                fullname: '关山镇'
            },
            {
                id: '713104',
                fullname: '卑南乡'
            },
            {
                id: '713105',
                fullname: '大武乡'
            },
            {
                id: '713106',
                fullname: '太麻里乡'
            },
            {
                id: '713107',
                fullname: '东河乡'
            },
            {
                id: '713108',
                fullname: '长滨乡'
            },
            {
                id: '713109',
                fullname: '鹿野乡'
            },
            {
                id: '713110',
                fullname: '池上乡'
            },
            {
                id: '713111',
                fullname: '绿岛乡'
            },
            {
                id: '713112',
                fullname: '延平乡'
            },
            {
                id: '713113',
                fullname: '海端乡'
            },
            {
                id: '713114',
                fullname: '达仁乡'
            },
            {
                id: '713115',
                fullname: '金峰乡'
            },
            {
                id: '713116',
                fullname: '兰屿乡'
            }
        ],
        [
            {
                id: '713201',
                fullname: '马公市'
            },
            {
                id: '713202',
                fullname: '湖西乡'
            },
            {
                id: '713203',
                fullname: '白沙乡'
            },
            {
                id: '713204',
                fullname: '西屿乡'
            },
            {
                id: '713205',
                fullname: '望安乡'
            },
            {
                id: '713206',
                fullname: '七美乡'
            }
        ]
    ]
];
function myShowModal(title) {
    uni.showModal({
        title: '提示',
        content: title,
        showCancel: false,
        success: (resShow) => {}
    });
}
module.exports = {
    provinces,
    city,
    countyDistrict,
    myShowModal
};
