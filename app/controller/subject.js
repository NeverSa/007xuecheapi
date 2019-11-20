'use strict';

const Controller = require('egg').Controller;

class SubjectController extends Controller {
    async subject1ById() {
        const { ctx } = this;
        ctx.body = await ctx.service.subject.subject1ById()
    }
    async detail() {
        const { ctx } = this;
        const query = ctx.request.query;
        console.log(query)
        ctx.body = await ctx.service.subject.detail(query)
    }


    async created() {
        const { ctx } = this;
        for (let i = 0; i < 1440; i++) {
            let index = this.getModel(i);
            try {
                const result = await ctx.curl(`http://mnks.jxedt.com/get_question?index=${index}`, {
                    // 自动解析 JSON response
                    dataType: 'json',
                    // 3 秒超时
                    timeout: 3000,
                });
                await ctx.service.subject.created(result.data)
            } catch (error) {

            }


        }
        // ctx.body = 
    }

    //更新类型
    async updataCategory() {
        const { ctx } = this;
        const categoryId = ctx.query.categoryId;
        let arr = [];
        switch (categoryId) {
            case "1":
                arr = [661, 607, 655, 625, 641, 662, 663, 652, 651, 608, 647, 653, 618, 623, 619, 660, 632, 633, 634, 635, 636, 637, 638, 644, 657, 604, 605, 606, 609, 610, 611, 612, 613, 614, 615, 616, 617, 620, 621, 622, 624, 626, 627, 628, 629, 630, 631, 640, 642, 643, 645, 646, 648, 649, 650, 654, 656, 659, 664, 665, 666, 667, 668, 639];
                break;
            case "2":
                arr = [7815, 46, 47, 48, 7711, 2625, 57, 162, 62, 367, 381, 373, 388, 377, 375, 374, 369, 372, 371, 366, 376, 391, 387, 385, 386, 368, 389, 370, 13505, 379, 378, 393, 392, 382, 383, 384, 380, 7688, 7683, 7751, 2624, 390];
                break;
            case "3":
                arr = [261, 259, 258, 7757, 7756, 7674, 256, 270, 318, 316, 257, 260, 262];
                break;
            case "4":
                arr = [13491, 13489, 13485, 13488, 13487, 228, 230, 229, 227, 231, 13477, 221, 13490, 7780, 219, 218, 220, 216, 217, 215, 222, 223, 13481, 13484, 224, 225, 226, 795, 794, 799, 798, 793, 787, 802, 790, 7771, 7736, 7799, 7772, 7792, 785, 7687, 786, 788, 797, 800, 803, 2577, 214];
                break;
            case "5":
                arr = [7813, 169, 64, 147, 146, 158, 7779, 159, 157, 55, 148, 160, 140, 13493, 136, 2574, 2548, 13496, 2616, 2617, 7742, 2615, 2618, 7710, 2565, 2627, 2611, 82, 56, 155, 57, 161, 168, 128, 2614, 154, 7738, 162, 152, 153, 141, 156, 61, 144, 63, 143, 2620, 139, 138, 151, 149, 62, 124, 137, 13526, 781, 762, 723, 775, 747, 705, 704, 773, 699, 721, 698, 725, 771, 761, 7765, 733, 569, 2555, 2568, 2572, 2573, 2607, 150, 142, 145];
                break;
            case "6":
                arr = [2621, 7819, 7713, 166, 167, 7697, 7752, 7818, 2623, 2622, 90, 81, 73, 852, 822, 816, 826, 817, 818, 815, 810, 820, 819, 707, 706, 703, 694, 7733, 732, 688, 824, 693, 811, 812, 813, 814, 821, 823, 825, 827, 686];
                break;
            case "7":
                arr = [2547, 2576, 122, 121, 83, 74, 76, 68, 77, 67, 80, 119, 7692, 7774, 7750, 7812, 7708, 2589, 2604, 82, 7740, 135, 132, 130, 2587, 13480, 79, 72, 81, 73, 69, 70, 826, 784, 750, 749, 844, 804, 758, 682, 830, 690, 837, 835, 833, 831, 832, 836, 838, 801, 13554, 13553, 13533, 683, 828, 829, 2551, 2553, 2555, 75, 834, 78, 71];
                break;
            case "8":
                arr = [242, 243, 7760, 181, 180, 245, 239, 179, 237, 236, 244, 241, 238, 240, 178, 7730, 7678, 7761, 7677, 7762, 970, 962, 963, 964, 13534, 968, 960, 961, 965, 966, 967, 969, 971, 972, 973];
                break;
            case "9":
                arr = [2571, 2626, 13499, 13486, 273, 13520, 450, 13478, 13519, 13513, 13522, 13521, 13512, 13511, 13515, 13517, 13516, 13518, 13510, 600, 596, 598, 597, 599, 579, 580, 571, 586, 590, 588, 587, 594, 591, 589, 593, 577, 574, 603, 395, 396, 397, 398, 401, 402, 403, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422, 423, 424, 425, 426, 427, 428, 429, 430, 431, 432, 433, 434, 435, 436, 437, 438, 439, 440, 441, 442, 443, 444, 445, 446, 447, 448, 451, 452, 453, 454, 456, 457, 458, 459, 460, 461, 462, 463, 464, 465, 466, 467, 468, 469, 470, 471, 472, 473, 476, 477, 478, 479, 480, 481, 482, 483, 484, 485, 486, 487, 488, 489, 490, 491, 492, 493, 494, 495, 496, 497, 498, 499, 500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511, 514, 515, 516, 517, 518, 519, 520, 521, 522, 523, 524, 525, 526, 527, 528, 529, 530, 531, 532, 533, 534, 535, 536, 537, 539, 540, 541, 542, 551, 558, 560, 563, 564, 455, 561, 399, 400, 404, 405, 406, 512, 13508, 394, 449, 474, 13506, 13507, 13509, 513, 475, 13514, 13897, 543, 544, 545, 546, 547, 548, 549, 550, 552, 553, 554, 555, 556, 559, 562, 565, 566, 557, 567, 568, 569, 570, 572, 573, 575, 576, 578, 581, 582, 583, 584, 585, 592, 595, 601, 602, 2570, 538];
                break;
            case "10":
                arr = [2593, 2586, 7813, 54, 122, 7693, 121, 126, 115, 116, 117, 7814, 74, 7776, 2564, 129, 131, 127, 118, 107, 119, 53, 7777, 7696, 2608, 7801, 7709, 7809, 7741, 7808, 7778, 7711, 7811, 2584, 2609, 2588, 112, 113, 114, 110, 111, 2606, 134, 2589, 135, 132, 130, 120, 133, 125, 128, 2595, 123, 2610, 108, 60, 58, 109, 815, 820, 695, 701, 727, 700, 729, 7796, 7679, 702, 728, 768, 766, 767, 769, 837, 833, 730, 711, 811, 812, 720, 13533, 689, 2585, 2591, 2605, 75, 2590];
                break;
            case "11":
                arr = [671, 672, 673, 676, 669, 670, 674, 675, 677];
                break;
            case "12":
                arr = [2580, 206, 205, 2543, 59, 2579, 7694, 2576, 104, 193, 7695, 165, 7775, 76, 68, 77, 67, 7776, 7699, 176, 199, 200, 204, 203, 13503, 13504, 7817, 7712, 2632, 2582, 2635, 2633, 202, 13501, 13500, 13502, 163, 172, 161, 198, 2634, 197, 177, 175, 174, 173, 171, 201, 66, 185, 164, 195, 196, 192, 194, 759, 757, 750, 749, 764, 776, 748, 755, 756, 722, 716, 801, 726, 825, 2578, 2581, 16510, 16512, 16511, 2636];
                break;
            case "13":
                arr = [358, 359, 38, 326, 325, 39, 37, 44, 327, 349, 341, 345, 344, 355, 347, 346, 354, 84, 353, 342, 351, 343, 7793, 7806, 7728, 348, 350, 356, 357, 360, 361, 7725, 340, 352, 13895, 13896, 16509];
                break;
            case "14":
                arr = [7826, 7703, 328, 7707, 7675, 7759, 7676, 254, 253, 246, 255, 335, 7705, 333, 7681, 363, 267, 266, 7682, 268, 364, 365, 7702, 12, 334, 7827, 7758, 19, 337, 7744, 7701, 263, 7743, 7721, 250, 7784, 10, 42, 40, 43, 322, 15, 329, 331, 7706, 249, 41, 324, 321, 13483, 336, 7745, 323, 7722, 7797, 7828, 332, 7719, 318, 7755, 7782, 28, 330, 7804, 7746, 7766, 362, 7803, 264, 13, 7720, 265, 247, 251, 252, 248, 7825, 7726, 7790, 7748, 7727, 7788, 7718];
                break;
            case "15":
                arr = [103, 13482, 13479, 104, 100, 95, 94, 96, 105, 97, 91, 92, 98, 7805, 213, 93, 101, 102, 212, 2601, 2600, 2598, 2603, 86, 208, 207, 65, 90, 209, 210, 211, 88, 85, 87, 89, 7771, 7714, 7787, 7735, 99, 789, 791, 792, 796, 808, 2557, 2562, 2597, 2599, 2602];
                break;
            case "16":
                arr = [98, 80, 13481, 69, 70, 843, 851, 750, 749, 844, 7747, 7786, 7735, 847, 846, 687, 680, 841, 850, 678, 845, 839, 692, 849, 853, 840, 13541, 679, 684, 685, 691, 842, 848, 2553, 2555, 71];
                break;
            case "17":
                arr = [2580, 2593, 191, 190, 13494, 2579, 7775, 2612, 2608, 2615, 2619, 2566, 2611, 2554, 2567, 2595, 2613, 2610, 189, 106, 13524, 13526, 7769, 759, 757, 782, 754, 781, 724, 762, 723, 752, 743, 772, 784, 775, 747, 763, 705, 746, 783, 770, 774, 706, 764, 776, 704, 773, 739, 744, 736, 760, 699, 779, 721, 715, 777, 698, 701, 741, 697, 742, 740, 738, 696, 725, 700, 780, 755, 731, 758, 771, 718, 735, 761, 734, 756, 709, 722, 7770, 7734, 751, 710, 719, 702, 716, 703, 713, 7798, 717, 7686, 7685, 732, 778, 737, 768, 766, 767, 769, 745, 708, 7684, 753, 765, 714, 733, 720, 726, 2556, 2569, 2585, 2596, 2592, 2560];
                break;
            case "18":
                arr = [2550, 13523, 877, 876, 878, 909, 908, 952, 945, 946, 890, 13549, 13547, 13551, 13546, 892, 904, 886, 932, 931, 928, 930, 929, 934, 874, 882, 883, 884, 906, 907, 911, 916, 917, 919, 920, 889, 887, 888, 891, 900, 896, 894, 933, 935, 912, 913, 13544, 943, 951, 898, 897, 905, 13539, 13540, 13542, 902, 949, 869, 870, 872, 13535, 13538, 13537, 13536, 13543, 13550, 13545, 13548, 13552, 957, 866, 867, 868, 937, 938, 939, 936, 880, 881, 926, 950, 875, 865, 871, 873, 885, 879, 893, 895, 899, 901, 903, 910, 914, 915, 918, 921, 922, 923, 924, 925, 927, 940, 941, 942, 944, 947, 948, 953, 954, 955, 956, 958, 2549, 959];
                break;
            case "19":
                arr = [13520, 13522, 590, 589, 593, 577, 574, 603, 407, 411, 412, 414, 417, 422, 423, 424, 425, 428, 430, 431, 432, 454, 476, 477, 478, 479, 480, 481, 482, 483, 484, 485, 487, 488, 489, 496, 497, 498, 499, 500, 501, 502, 503, 504, 505, 506, 509, 510, 511, 518, 519, 525, 526, 539, 540, 455, 399, 400, 404, 405, 406, 572, 573, 575, 576, 582, 585, 592, 602];
                break;
            case "20":
                arr = [877, 876, 892, 886, 874, 882, 884, 889, 887, 896, 894, 898, 897, 880, 881, 873, 885, 879, 893, 895, 921, 922, 923];
                break;
            case "21":
                arr = [311, 310, 7700, 309, 7802, 314, 315, 7754, 184, 183, 186, 187, 188, 13475, 312, 313, 7690, 7689, 7739, 308, 7800, 7729, 233, 7821, 234, 7822, 13476, 13474, 235, 232, 182, 858, 861, 863, 860, 857, 855, 7717, 806, 854, 856, 859, 864, 2551, 2597, 862];
                break;
            case "21":
                arr = [317, 25, 358, 359, 7716, 298, 22, 296, 7, 297, 292, 6, 295, 294, 7781, 7820, 7783, 7810, 7785, 21, 7773, 271, 33, 4, 5, 9, 283, 272, 306, 304, 305, 303, 281, 282, 280, 275, 278, 277, 279, 274, 276, 290, 291, 7829, 302, 301, 299, 300, 284, 286, 307, 29, 293, 2637, 2638, 2639, 2640, 319, 26, 344, 287, 288, 289, 17, 7824, 269, 355, 347, 346, 354, 338, 339, 18, 30, 27, 7704, 14, 7753, 7823, 353, 342, 36, 343, 320, 8, 285, 13525, 7791, 7790, 7806, 7680, 7764, 7731, 7723, 7807, 7724, 7794, 7789, 23, 352, 16, 1, 2, 3, 13894, 20];
                break;
            default:
                break;
        }
        if (categoryId) {
            const result = await ctx.service.subject.updataCategory(arr, categoryId);
            ctx.body = result
        } else {
            ctx.body = {}
        }


    }
    //获取题目分类信息
    async getCategorylist(){
      const  {ctx}=this;
      const categoryList = await ctx.service.subject.getCategorylist();
      const categoryCount=await ctx.service.subject.getCategoryCount();
      ctx.body = categoryList
    }
    getModel(index) {
        let arr = [256, 2560, 1, 257, 2561, 7681, 2, 258, 2562, 7682, 3, 259, 2563, 4, 260, 2564, 5, 261, 2565, 6, 262, 2566, 7, 263, 2567, 8, 264, 2568, 9, 265, 2569, 7689, 10, 266, 2570, 7690, 11, 267, 2571, 7691, 12, 268, 2572, 7692, 13, 269, 2573, 7693, 14, 270, 2574, 7694, 15, 271, 2575, 7695, 16, 272, 2576, 7696, 17, 273, 2577, 7697, 18, 274, 2578, 7698, 19, 275, 2579, 7699, 20, 276, 2580, 7700, 21, 277, 2581, 7701, 22, 278, 2582, 7702, 23, 279, 2583, 7703, 24, 280, 2584, 7704, 25, 281, 2585, 7705, 26, 282, 2586, 7706, 13594, 27, 283, 2587, 7707, 13595, 28, 284, 2588, 7708, 13596, 29, 285, 2589, 7709, 13597, 30, 286, 2590, 7710, 13598, 31, 287, 2591, 7711, 13599, 32, 288, 2592, 7712, 13600, 33, 289, 2593, 7713, 13601, 34, 290, 2594, 13602, 35, 291, 2595, 7715, 13603, 36, 292, 2596, 7716, 13604, 37, 293, 2597, 7717, 13605, 38, 294, 2598, 7718, 39, 295, 2599, 7719, 13607, 40, 296, 2600, 7720, 13608, 41, 297, 2601, 7721, 13609, 42, 298, 2602, 7722, 13610, 43, 299, 2603, 13611, 44, 300, 2604, 13612, 45, 301, 2605, 13613, 46, 302, 2606, 47, 303, 2607, 48, 304, 2608, 49, 305, 2609, 7729, 50, 306, 2610, 51, 307, 2611, 52, 308, 2612, 53, 309, 2613, 54, 310, 2614, 55, 311, 2615, 56, 312, 2616, 57, 313, 2617, 58, 314, 2618, 7738, 59, 315, 2619, 7739, 60, 316, 2620, 7740, 61, 317, 2621, 7741, 62, 318, 2622, 7742, 63, 319, 2623, 7743, 64, 320, 2624, 7744, 65, 321, 2625, 7745, 66, 322, 2626, 7746, 67, 323, 2627, 68, 324, 2628, 69, 325, 2629, 7749, 70, 326, 2630, 7750, 71, 327, 2631, 7751, 72, 328, 2632, 7752, 73, 329, 2633, 7753, 74, 330, 2634, 7754, 75, 331, 2635, 7755, 76, 332, 2636, 7756, 77, 333, 2637, 7757, 78, 334, 2638, 7758, 79, 335, 2639, 7759, 80, 336, 2640, 7760, 81, 337, 82, 338, 83, 339, 84, 340, 85, 341, 86, 342, 7766, 87, 343, 88, 344, 89, 345, 90, 346, 91, 347, 92, 348, 93, 349, 7773, 94, 350, 7774, 95, 351, 7775, 96, 352, 7776, 97, 353, 7777, 98, 354, 7778, 99, 355, 7779, 100, 356, 7780, 101, 357, 7781, 102, 358, 7782, 103, 359, 7783, 104, 360, 7784, 105, 361, 7785, 106, 362, 107, 363, 108, 364, 109, 365, 110, 111, 112, 113, 114, 115, 116, 117, 7797, 118, 119, 120, 7800, 121, 7801, 122, 7802, 123, 7803, 124, 7804, 125, 7805, 16509, 126, 16510, 127, 16511, 128, 7808, 129, 7809, 130, 7810, 131, 7811, 132, 7812, 133, 7813, 134, 7814, 135, 7815, 136, 7816, 137, 7817, 138, 7818, 139, 7819, 140, 7820, 141, 7821, 142, 7822, 22670, 143, 7823, 22671, 144, 7824, 22672, 145, 7825, 22673, 146, 7826, 22674, 147, 7827, 22675, 148, 7828, 149, 7829, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 13474, 163, 13475, 164, 13476, 165, 13477, 166, 167, 13479, 168, 13480, 169, 13481, 170, 13482, 171, 13483, 172, 13484, 173, 13485, 174, 13486, 175, 13487, 22703, 176, 13488, 177, 13489, 178, 13490, 179, 13491, 22707, 180, 13492, 22708, 181, 13493, 22709, 182, 13494, 22710, 183, 13495, 22711, 184, 13496, 22712, 185, 13497, 22713, 186, 13498, 22714, 187, 13499, 22715, 188, 13500, 22716, 189, 13501, 190, 13502, 191, 13503, 192, 13504, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 22742, 215, 22743, 216, 22744, 217, 22745, 218, 22746, 219, 22747, 220, 22748, 221, 22749, 222, 22750, 223, 22751, 224, 22752, 225, 22753, 226, 22754, 227, 22755, 228, 22756, 229, 22757, 230, 231, 22759, 232, 22760, 233, 234, 22762, 235, 236, 22764, 237, 2541, 22765, 238, 2542, 22766, 239, 2543, 240, 2544, 241, 2545, 22769, 242, 2546, 22770, 243, 2547, 22771, 244, 2548, 245, 2549, 246, 2550, 247, 2551, 22775, 248, 2552, 249, 2553, 250, 2554, 7674, 251, 2555, 7675, 252, 2556, 7676, 253, 2557, 254, 2558, 255, 2559, 512, 513, 514, 515, 516, 517, 518, 519, 520, 521, 522, 523, 524, 525, 526, 527, 528, 529, 530, 531, 532, 533, 534, 535, 536, 537, 538, 539, 540, 541, 542, 543, 544, 545, 546, 547, 548, 549, 550, 551, 552, 553, 554, 555, 556, 557, 558, 559, 560, 561, 562, 563, 564, 565, 566, 567, 568, 569, 570, 571, 572, 573, 574, 575, 576, 577, 578, 579, 580, 581, 582, 583, 584, 585, 13897, 586, 587, 588, 589, 590, 591, 592, 593, 594, 595, 596, 597, 598, 599, 600, 601, 602, 603, 604, 605, 606, 607, 608, 609, 610, 611, 612, 613, 614, 615, 616, 617, 618, 619, 620, 621, 366, 622, 367, 623, 368, 624, 369, 625, 370, 626, 371, 627, 372, 628, 373, 629, 374, 630, 375, 631, 376, 632, 377, 633, 378, 634, 379, 635, 380, 636, 381, 637, 382, 638, 383, 639, 384, 640, 385, 641, 386, 642, 387, 643, 388, 644, 389, 645, 390, 646, 391, 647, 392, 648, 393, 649, 394, 650, 395, 651, 396, 652, 397, 653, 398, 654, 399, 655, 400, 656, 401, 657, 402, 658, 403, 659, 404, 660, 405, 661, 406, 662, 407, 663, 408, 664, 409, 665, 410, 666, 411, 667, 412, 668, 413, 669, 414, 670, 415, 671, 416, 672, 417, 673, 418, 674, 22690, 419, 675, 22691, 420, 676, 22692, 421, 677, 22693, 422, 13478, 22694, 423, 22695, 424, 22696, 425, 22697, 426, 22698, 427, 22699, 428, 22700, 429, 430, 22702, 431, 432, 22704, 433, 22705, 434, 22706, 435, 436, 437, 438, 439, 440, 441, 442, 443, 444, 445, 22717, 446, 22718, 447, 22719, 448, 22720, 449, 13505, 22721, 450, 13506, 22722, 451, 13507, 22723, 452, 13508, 22724, 453, 13509, 22725, 454, 13510, 22726, 455, 13511, 22727, 456, 13512, 22728, 457, 13513, 22729, 458, 13514, 22730, 459, 13515, 22731, 460, 13516, 22732, 461, 13517, 22733, 462, 13518, 22734, 463, 13519, 22735, 464, 13520, 22736, 465, 13521, 22737, 466, 13522, 22738, 467, 13523, 22739, 468, 13524, 22740, 469, 13525, 22741, 470, 13526, 471, 472, 473, 474, 475, 476, 477, 478, 479, 480, 481, 482, 483, 484, 485, 486, 22758, 487, 488, 489, 22761, 490, 491, 492, 493, 494, 495, 496, 22768, 497, 498, 499, 500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511, 768, 7680, 769, 770, 771, 7683, 772, 7684, 773, 7685, 774, 7686, 775, 7687, 776, 7688, 777, 778, 779, 780, 781, 782, 783, 784, 785, 786, 787, 788, 789, 790, 791, 792, 793, 794, 795, 796, 797, 798, 799, 800, 801, 802, 7714, 803, 804, 805, 806, 13606, 807, 808, 809, 810, 811, 7723, 812, 7724, 813, 7725, 814, 7726, 815, 7727, 816, 7728, 817, 818, 7730, 819, 7731, 820, 7732, 821, 7733, 822, 7734, 823, 7735, 824, 7736, 825, 7737, 826, 827, 828, 829, 830, 831, 832, 833, 834, 835, 7747, 836, 7748, 837, 838, 839, 840, 841, 842, 843, 844, 845, 846, 847, 848, 849, 7761, 850, 7762, 851, 7763, 852, 7764, 853, 7765, 854, 855, 7767, 856, 7768, 857, 7769, 858, 7770, 859, 7771, 860, 7772, 861, 862, 863, 864, 7786, 7787, 7788, 7789, 7790, 7791, 7792, 7793, 7794, 7795, 7796, 7798, 7799, 7806, 7807, 22676, 22677, 22678, 22679, 22680, 22681, 22682, 22683, 22684, 22685, 22686, 22687, 22688, 22689, 678, 679, 680, 681, 682, 683, 684, 685, 22701, 686, 687, 688, 689, 690, 691, 692, 693, 694, 695, 696, 697, 698, 699, 700, 701, 702, 703, 704, 705, 706, 707, 708, 709, 710, 711, 712, 713, 714, 715, 716, 717, 718, 719, 720, 721, 722, 723, 724, 725, 726, 727, 728, 729, 730, 731, 732, 733, 734, 735, 736, 737, 738, 739, 740, 741, 742, 743, 744, 745, 746, 747, 22763, 748, 749, 750, 751, 22767, 752, 753, 754, 755, 756, 22772, 757, 22773, 758, 22774, 759, 760, 761, 762, 763, 764, 765, 7677, 766, 7678, 767, 7679, 865, 866, 867, 868, 869, 870, 871, 872, 873, 874, 875, 876, 877, 878, 879, 880, 881, 882, 883, 884, 885, 886, 887, 888, 889, 890, 891, 892, 893, 894, 895, 896, 897, 898, 899, 900, 901, 902, 903, 904, 905, 906, 907, 908, 909, 910, 911, 912, 913, 914, 915, 916, 917, 918, 919, 920, 921, 922, 923, 924, 925, 926, 927, 928, 929, 930, 931, 932, 933, 934, 935, 936, 937, 938, 939, 940, 941, 942, 943, 944, 945, 946, 947, 948, 949, 950, 951, 952, 953, 954, 955, 956, 957, 958, 959, 960, 961, 962, 963, 964, 965, 966, 967, 968, 969, 970, 971, 972, 973, 13527, 13528, 13529, 13530, 13531, 13532, 13533, 13534, 13535, 13536, 13537, 13538, 13539, 13540, 13541, 13542, 13543, 13544, 13545, 13546, 13547, 13548, 13549, 13550, 13551, 13552, 13553, 13554]
        if (index > arr.length) {
            index = index % arr.length;
        }
        return arr[index]

    }

}

module.exports = SubjectController;