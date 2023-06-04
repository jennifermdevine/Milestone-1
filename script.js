let count = 4;
let counterDisplayElem = document.querySelector('#attempts');
counterDisplayElem.innerHTML = count;

let totalScore = 0;
let scoringDisplayElem = document.querySelector('#points');
scoringDisplayElem.innerHTML = totalScore;

document.getElementById('youwin').style.display = 'none';

let fishingResultImage = new Array();

    fishingResultImage[0] = ["https://lh3.googleusercontent.com/uKYCqQJ6kUjQT2B1kteEgp-WL_8jHQWDSd5ZJ4t7I99pRJO9G6sblppvJKMH2sOHNZCuCICdGZ07Lr4PVjgVT_1yjLzg7_gAvz_jp3opGl1XEX9r-RRpBgVGi0aNO6_ImyWbuc6bx5dNKkoWwc7whE0EgwbnlTScPfWpq0OcLMKwcap75TgFHTNkH0tisZ-VE6pCSJ2N9mTnteSV5fI6o8GyjNfjS29W2Z3AKw1KwkdHqJvpg0TBgj4Jtv_eHDpidHTIFgz7WmH_5nu-sSIs5ULiE8DjE7r9m811nTadiTlqlNrq5FG9x02TeLZTwuB4xHxpvOr7CsVSxS2YaGSfyzuCM8Z__mNdz7yCvjexhRJs3cSAUtj5ss5MFZ2K6F5jeErrGwy2upRtUnztnfw5S2bYKy7cGe_rkI0-2UEaRR6skTMQs8dR9CoLS3w8qmiaFN7G2fuglTXgW9BCT3e0N2NRM8ihKBTF4BSDJAo0p8Gn_89DuvdhIMgK3kL93wYc8HWSdhtKrg24UeiEchZg_oTSRV2XFjZvXJQxsQkCWykFDwY1IGIuj0n0Bl5bU_Gsgvet4Da4NV-vuuaIem8Jn0itiIKM1_lCiReKb9DRDksBe4IWvJR1W4Dw19eAXJEfSBJ85kXOiJDiJrWxvE1wBrmNRbq3afP75IJmoPkl1M1Amap02YH0vZOb7T59rONCC1D-Ui-7UCI-Ika1PNKCK0Cr04lXLZaaWbJtdiaP8zt6Y7SCt-0RYEn0AeauMTCYBeyde2wdy568vF1QH_caWPHJLMVf4QH85wzZ1P_By0Wxzy6D8xPrCafio6exeoCaeMfuFehQyACetU4YqccmL8HubJWsA5ebAUjrVji7B9xNd7qDSFAC5vMC5RcCr24s1qQ09StM8umDQIg6PlprfqoqTVRXJM0P30X7GNK6o1kCei9043XUKsko92TNCg4TvbbfSsriZpBrJM3FjENDc7Hunj92fp5HnqkmQrPmbw2tS3xNr9pp3c93VtBf88aeKFSRndrvFJE6M-xcCccAikGio9k=w937-h937-s-no?authuser=1", 3]; //black crappie
    fishingResultImage[1] = ["https://lh3.googleusercontent.com/_q0op6rW-aWzchf4PjN9r0cp97t7GR7ZzcuO0mlhid3Z9xWSKTXQmc6ZPhoJq6HMrqlp7s19FoDFrpU6PJDSx_Yp23wZJimBCX6i_7jXR8UPr6umAm4TQleMB--NfYwBFWhtsGeYIlTvOgxFAsfa1Z9O_AG8aHW4FGyLYxXHeGCInvAC7lJX_kLLCULR1D4jhIE-vF5syLGH1W3iD8XPkeSy_m_mY4jc8KINsJ_sEfPLxCjQA9bEUQJBZTQGgc2ZUe6AqdNAj7AVkSfdweiZSq-okFuAMoPZ3S3aNN54ppIwrSqRTr5t-UzPujd9wdYlTpmKyjvEPnuhGEQkA4RvVbcNgzLHU9eHD52XxuZ5DtIO8jukd9Y2LoD50R2D6LadnMpCzBIncYKEpdWQbLl5gbfME_Sj202mX1MZBuGYaBJ0nUTEe1qpcQb8ovclKRyULZjkKHqMNviyAztvgMkI1CoGekTloQ9Puq2UeMCniM_uRBtM1RTeZ3xsUma60YQcIBWv7qZoMiAam7EemcvwxT2npFb7ddZFvLT3H7xNPnLPBcNRuE5mnh7xfUzBE5PxPOElS9Nu0aXFdl1j1yGfk39o6FSpmHr7TDzVqQSgHwuzQrCx9qmehmVbM7XwBRCBuQwJ28uRkCfcanu6P8EmcDLf1uP43ZzEknZxeAl4idWOqy5G_3v2rYDUs69udwhyXX4NPcJVleOhJ800jHsWvmG45Lhei0G92U2p8Ri2rs-2VkLG7LdpqWHilmhAL-jrECRIxFcQ9IKDzYz3To3h7JBrXhefmP7Lfrxz4tsDCWjO5sdfV7LhyWNFBx8HCnqDYlmn8SLdsPw1K-TLRzkyXy59XVTypIa3SIOk7SJWqyFZGubJDlGcserlCfWpA7AZNiZO8jx6mLeaXB1gqKApaXU9i8Darts341_khQSE2PboAPmeHIzLXBFdwFTUN1Yqt1IW95sFagJkbwCB8N4QYm0OjFa6JbNW1Uc9QZbhAVIIj4JDEyaCKThouyz8P5NzESKje_GP5YQ31jcti-7Gs-Rg60A=w937-h937-s-no?authuser=1", 3]; //striped bass
    fishingResultImage[2] = ["https://lh3.googleusercontent.com/_P2MUA2eFf4Mh1Q790gt9A8OiMjAxR3_Pwi1nG7l5lbAgM-TyXN3jlv8Fi0T_l5oJTafv0l6lHhqMPcnGtgJgcK53UuigF09xS5VWeBO539O2THRQGpT7Ebtroa9F79WudT60pCuTkYQHvofKGtRqEW8dK-w924mSjC8_nhagw1XYrTrKTG2v-efpiLH1u8D-2Sc5KL3zZ6Xuay--uehtRZUKx0r5IaTSJ2mJ6kNkwjrVER09HWnEwRLQECcH2ZaeLyz4tMPqP7BGscBsJR6gliJQs_eRIm3deG4TAGvmBSie90SL6XuZHCFUKPCJutrWXXp5OWyPrUWIRoLqrODntJC7LuNNz1Ks3T-S3l09JAwh7PE1quKVLQkQnwwGaZSw29NmfYE9dAfcUfqyaE1YJ9YK1fbsSS5Zdhgt-2r0ZNrKdBAU-oqm7PibO68R0NN1Ires-4Bq2nC60SjydsERcBBAq9KPf1FhvQK7gNy31uYdodL8vBsJV3gjFKBn4fd9denLZM68QR_TmUGFlr-Kz0ywQ6MseL4OogVTnssK4YkGRACXbbu2KhYIKWQ5y7Z_Z69JlltVMxBcl4JptzYot1nSIn5TYAxw0WLIBDiqFrkxjF_4Nu2jo6Q40kqiv6Anx6JlUWxPnkoHPonsAP2PPRtvDiuMcGaZMR-paGD3MW-IW_wufhu_yP9b5_66vmUwJa45Y-M7K_QgEWHUxKQxvY_B_aPdmfp1LwKk95xh_qUnhGTWEwO4nNEZYkxwglDpmWHoBu5JwDxNmG2s_0hxH2ghsOJSixLrsPyEKjUswzii6pFnrpTjJeguVkeKGn9MYMbjh7RuRfcUSW2BQKSJ-s8ZL-hFdAKCWDOqgmbnu4ZiPkIXstHtzgy8OghbRIvA_BVdHvetsb1sCIfeqk8xN6iA11cR445lvkXN5ZiLhGn2-IalDjpFKmwr7hF6IQ2elMuDswRnpxvuYldGqs5Wu9VecquVDjAf_PrYCZT6HTpajZA-LAwRMZzpsYK0QG7IjQ-TXbM2NB-u1E4xKbBFNI_7Bc=w937-h937-s-no?authuser=1", 3]; //largemouth bass
    fishingResultImage[3] = ["https://lh3.googleusercontent.com/nGnRcBMDyYk0qPjf1dZiATYC6cm1udjaAwNo34X7MzUyycKhYdiDmIhHruEqva4CW7cceHclvWBpJh2HO7K6QuC5UJMfDmLQ40m7eu6VpvYe1a4DOzaUTmwypfuXMIwEtmOcWgwCt67ZOEnp-ADMoo8KC5e6EcUwFT-IkK4PgS9brIw_8Yv04zHWoW7fPxii5fBo8rCJfnG81T64Xj1XVVqsR-1S7DN1AcZl725QqlEW-GRBXzMDLqfkQ0YeG60bOJgkS3qC0GgqEgWcP78_NvOan7oAt2wr2A8TwM8mM-yu_h-mCsWsWo9e21C5OnYuh2enfUnTOA9J3CyhCC3EuKAbVJK0ryVivx5elfoOJYjh0ByFEPIKk5vMgqOi-t88KDEWxSHzywtiXHDu8W5S7r_Gj40nd27SWCTpQxWzPihqiZEOcbNNe_TdaY35pf9lryeFXWF5Zt3uUqCuCPaagUU3oyxPSOyPTP9rimQvIJK2Q5TUlbU2VTs3X2SeeemK5vsThDSNcE_YPngEyrITN2GhAYJJ6GoCDQxQoye6B7v6iIw_5aFQv_zG-Uu1fNGkFnOgaJ0LSRqPU0ZXNHgVIyHq6ZnWJ4tammH9ZOl5t2LWKhVIozT9GA-2QJsYaBt57aGABYeTx1dzi3Mu8N7eS5FHZXIXk8oMA6PjPkebB2c90OqMrafasWRBqWs8WeBgTf2MY3pj6xT4hzpQ4yJFOJAmABf0WM5hmriZBft91yApL-YXzwVU8ffpRkOIAykLnu9ZPfEQjcqL3zzgdPyyo5Uf2pg7kcMm3xppQpe2o96CXeZPcNVAZEC6dYH8gjFZI_Gtw99uAaHkXN6o2Ywd3CwUVdBXIZsYTp-UMxad4fRCNTAcZCC7zKHRwiwiWAbzgElXk3F7cicGTmTftHc7ve5etwcD_NgF85G9qwG2-YrSu9CAGWAulufd9QkgBvXD-SNK21RCwQyIMuWPJCOSQDjfBuWShTndV0yky96hyXDhJuRFvtAlJmHXL9FbecK4FDwgdJZdEctBukP9TsFN2H75fjo=w937-h937-s-no?authuser=1", 3]; //rainbow trout
    fishingResultImage[4] = ["https://lh3.googleusercontent.com/EctYavg2gBDeqj0yjxC3AWzqH_kWXAkcMDLWdQadgpFFCBLUNKtjkkOVtBzxp6hQ2KaUZI00rn2Ju1zYhz8OTQnoRKLlu48YWxvDP_bRn4Eyu205EHo6rJqhhddwtdcituhPxs4brIKi_vyzqNdramOrMk3BvY7DOcZ-kMzRW72WLGhyjxehPe2g-8KoyL6bkeh3CBme_xoubzLKBoHGPNU90XJ2AcbBiC7UWxkf3r12riRzQ8xjOcqCCkYE0PBaEnzHY7IPn2ULHwoqF9UYr66Pie7orJabKITaDzUjQmrCDNwfz1eGjBJc6OAjRrJr8E9qMgYOJNrZwvlZ0R8V6kQvnAB1p5IqGTVlgwdvc9XW1XQSK1z3EogrhEk-5F1LHNFhyZgOizmnAC9gQpcYL2Sc7bCVyAC7jtbrq0WyA8X7HwxLK-6tStVjB56DgW4Heswvl9GPIH2NqFIskwfWyV5t7Lf41rofZiTr2tv-DFZREGYI4XhRQWXauZ2bBJTW-79jsZCxLEzYpOAbQ5o8KItr5kt-CE9kdI1o06sm1JHBHy6nYSKEyJ98R87xYTRHDUTsNm12JJ1fvx3MwRFI7yig15LT8TEwpilFic1Wf7AYB4-b19aT7app9c8IWIluyYYp0pmZyqRGrHHxxZphNv1z2VzagW8_B8-tnGM1aKICmOqdqcxueYCOfDwdKsnFcfoTTpsV3tVszkhmAOO6PqhWIXIUuJtlkhd-S-jc-bA_OyVEglIrV-wHZ7pXfrJl_lXpnM9aVCnl6Mv4m2cAov4unEm87bJUGpG-gO00FKjzpY7olD8mV0ajFwYGcpChltaLeG-ALJsfuQj9YVw6Cg4Ou-7v5gAhXlKMY1n2ikTdsnTkPHA6YroqEr72_HxyT3-2MDLMwVsLEhlzXW7KY8XRRxeU9Kt-5ZyERtKIlsehODEnENx8vFjdgrpoQRfA3700c1jKLuqv15gf3Rqm3z9cti_hiCBx_XGS9SdT-oAxua4pnuLQJK12rWTEzCsfiQLM5CkuAmCQV1O09p3I0MwokcA=w937-h937-s-no?authuser=1", 1]; //glass bottle
    fishingResultImage[5] = ["https://lh3.googleusercontent.com/AcWEXmsSGOzFjVQOANhCKFWi_yQo0gvOFv-dh0ZivyQCn-OzPaSE3HFvCiEnKQRnUZYYHEeC6ru4uuctKKvl8weAa_Ib6sj-0Ov7nVNW6ahjXO35mM7S2PkLZOsREXb33w_Uij8pTpTP5rlztiZD8HGQ9UnMy8KXLUA7k0lLpREo7L4GzcGsxPLGNzawgd-nCQ-0NnWWeDeE5Cz9i7hkbNjtg63K4A9mZFHv40GoJSctdrmvefgQb3-JDKE3QI7qmSD9mwHk3igloUvI2dTYmlakOy3Y3XooWXI9acBMKkg6eDn8RlvuwtUoeSruVHNLgjB7-m2NFRyu355mMY8sJFUCNO17INDvhLPo1OHLCwWQXk6Po8q9cHWHFGGC5h_wAsZxZ9whZ_3bBAEyOYlcxICUp5gzXAZqOG_EL0td85fZKrLJa5WR4xiy0t6Xh9uM47GqiT7ARcywUUjoCu237aAzwt9BqNnIPuqnTCL3-kLXDrQcSmo7GDm5UIlrKc2mXdPclPlQIi_ZchMhf_g50SFt7iKj-iqy3XoWaUwRrAMlaziGhqLCefLFJJZrX20tgRoFPVym6R8QjpH6mXuhVVF9RC1EOsrDARqpuHqeOEYyPOfo7Zn1DfLwDjRi1nCMynBS3hTis2xtuzlYi4dl7Ehkg1xI2X6Biar3qwg-EpxZ21sQgcuAf_xO0oUnslXlCXHJ5ZsA8Po30EIPIm0QnlrPmEM2y-fyooykWvF9MrhcsoPUhNfFyYDWeFrbhqJECHZLHLIC3iLimd5QArXOS-jVih07gPDWi1vtMv76bgHAt43lWnna2SYPVONjgkVtd0djTwc-Js9gePIgs04rkVzvqUL_bHrWTOXd2rAztUhnOeHrTaEAWA_nXirv-MkQg_wbQvT2YJxa_C0gOzxhVjKqshgrZDGo_xLRcOAJ4fwysRD7y-bR17P94hntSOKQ-DDqXRqooFpwJg1zKmZWBEE0gkV_o5dZG5rLE0NiiZSZUodvDUUahuj6_OJtC2Jb9ThlVjHcnGvOl-l2SZFJpGqv5ls=w937-h937-s-no?authuser=1", 1]; //old newspaper
    fishingResultImage[6] = ["https://lh3.googleusercontent.com/ZrosUFVc83lUuziTV6I0aVE1B0bVEM61Q0tQ3ZkuJraZpMwyYjCz-_W2ucgINK4LcJPJXWGN3IT63dtG0prlbkbXu04XNfgFq7x-xoAjqinEQF3EEzSawI1O3pI5WJBZtbOKwmWqx8Iyy881kKnxOKMA3KB_0PXmQoOCrDZeMY_Y-SIX63R-U_fR58oryOink4mklmKI0Tv4bUu_y_kRIX570JadPzB0ne9cKsEEsN7ntXAQeAMB-13ML4moeEIOeGXEQ2W7wKCNeCLeknCQvDUTa4UbhQRIwhkh1C9hFoj1iecv22hi2vFO5hAI_2LQ9AlrQatLqxeg_Dy2qvdwcG9hhNEcGlHnmdEIOD43umjJYtxlJuasMtIi10Nx3GCLJ7GVzuf3V5DgX1rTPw74g8uyzsinbRoFJlkb97Y6o649qRIfKzcCqvdchLfItlkpcLm4ZMbrNvacTKWpxuFgDFBKhyySMUgpt86ZTeV8b8aJABSO2YnI5eq7S4JeDAOG8UQX0hMdkT3B22Bjob5SY1DuK9i_CuT5LwRl0yQFqyEQczmFoRMh0FHut-PaDJZnBGZ-7uMCRbSJg37sTL-1nexcbYd7X8wUq5-t5Sk6_ARirdvJmCFBpv9f_qujEYdhhz6gVW9lFlssdg2c1Bwc3cSE0p6Nkl9GREOu_A7FPHMDjKGHnCNlY4jhxJBYn16b9_OttyF1LZajtC44VJ4HVr-iId-uov3HFzKfV4HP3dfp9YSQufc2qjQv6MwiTziL4UsnOkNSmH9ntEBHI3kaHvrhS4CUQoTtghEeRVEjUYCm1WiPvMeTe2Ev_wrJ_Qpy_QtL01D-3v_1PGs4JNhpn1vqgGVS_xG42RWS8xEZBFMoB6wKSjblWQusCm22uc5uQFtkplkY662n4P8LyJqbC48VFYJZBSiYGwnSp1cyMopeNwlZ_z95zHHJDx2ZTgL8lJk0vdNYPtu6Uw0uLpNgjIECGYX5-JRP68wb6YkjtYBAf98f3S9ogHb0hdyjUZatTw8aSKw7kz3b8n3Jh9Il_RuF3Qc=w937-h937-s-no?authuser=1", 1]; //single boot
    fishingResultImage[7] = ["https://lh3.googleusercontent.com/8ZpcmBS5DNbEXaF1W1uM-lO3Ui9mxo-SIcLOd1r0Zfu88LfUS2KIYr-wo2LSGfAR0BFZ-dBulGZwDSyWxOeRK4yFlSmJLImBRa7cef_iOAE63GFXm8dfENFJ3iLiGr0I2UKI5ik6JYAogro9Z8bn7_ocyGuVVlRTmaq-hS0zr99HQgWgSV_iqCKKrR2sZ6sXstKloaorKk10Da5TnqNhMXNq66Oaz0mMb27noz6B6O6I079wjJzdXkY_UIG7DRyTnsiMb6bR8oJkBHU-c9cHEXDsufMRdqeZn301IjRPt48pmjdDMj3QLfGi9tFTC7-UU6Z8aI_FqL1j0m4mzp8ytmzA9k2Jc71aHaENUXWg7uCKgNMU1QsaTNZ_wAj1rxJGIAOCC0MQ7wdggwHhnWgyjBJGwmn4sR7RljEskXyaYp6zTsoJZFF6nRcnFviYDpR1KwXXzBqjIw03MBmerlTYsRjBfPqUbANd5zLTOLfNwcaN_D_9arhoNVvML-beTxEdHo4bpZfFmHhGWwYVWsuNh4zepQtuE1D5QBIOLGnbGPy2RblNDchRCifH_qEPKFhb9HJOWTDkqo_Drc_VOmBQjiKqk2sxSBgb7hK8-iO1dY_z_rG-qWnSmyRjsl-off_kTx6Qlvm6VfcgJhJVMGx59vgMo61waxdM3tKamdMzJ375m8eNrYpuRHP7sxJha871Kjlv6IPMnmXD-elMfwn0seNqKPRxspi8uanGwQbrQhLig-ccjo5FuHT0jRRVjEajSREeXIjTbzBxv4LoKjxXqbIgkR43ANXFvlvR91NNUc4JNry205sAdE4RkOKS9WEHRzPQgWVeZz4zN8Vz0tyQPX7ApuarC52tPpYup0iw1fc8cjSDIs8_Ij7tmUD6iGsZZ8eLxUCf8fNulWGodZwAA2oCyj6p4mPKOq_xEVEmmL5xI55X4Fbvx6wsZQYOyK1lwfY6ax06zkZVoVbS0IgTZQD5YW453zYF4wO__pBGwitnwzgEWppCeOxYl5QsMTlNN7xVk8x9Tbs3OfCbBO60UHbM_RE=w974-h937-s-no?authuser=1", 5]; //vintage casino chips
    fishingResultImage[8] = ["https://lh3.googleusercontent.com/fmMJnN2eRGL7N0whkzjPsG0qKerdJyTs9VfqqlnBH6o005-WxY6XXBYQ78Swbs8cyYobTeCulsq9IGxE5byaSUEM8s2fPYdqNPIxJ5pB7Na4796nVosOk2vAVCROqvqA7dCghlf4xqG8ylzcFf3NcwDYU9U7_vdKUDE5KFVHmw0vgOJo8qP404vpFAqQWS1-6Ls3aCFPrgfZlp3eNjZtOxI5iQL_PihmlYpXEFbVDuflrdYImZYjKAgviHgNcUUvOpHM86-8AULfnv1b-IWMdsmMDqSD9Y1y0OXJkwOlYyVRSO1l3R_qbFA3cYc9hfU4hARCh9vtWr7U442RbBS5NMvjsOnduZxdYTaBJ1sxUT66YIIshvrwzkSi0CoVjI0kDRbxCUw1SxBZpyaEsXUNbQl29_R0OhJvbrWWsrnBzXKnO5nIuhcrlbGVI37j0vHpaD6gLfOK2zLX4Xm1tA4d0-3PnwhWByVXOQRAT_RQ4XpudyOaQBe2lwvEhquVTLxfJxpDQzwt7doKz1t7B0rfd50VKoKzQBdhD365Vc_3PXw3z_9LMprzUfeTjxB6xsRd914yggwxq2Vml6OBCxZB6XRIFSV_3wkLhIEsZqSpNVtdEl-1qrhivjzUa4GvuBYDhtNsFVwo9lKM4fZThMj7kX3WeL0bQ41q-cnEEqHIsfyro4-_d7zJdqquJF-1Kc_eKDsXn_yy4Dqmo7Z8cQyqwcAMnM0wNALyXSOCy614aB_Z0wJo3DFrjyeOnDA8XAEXNrsnejv5IuQYWnufoE8kXDOj5Mh_E4NAz4tLpWxkIWQITxDqPHGV46xfiOIBG9PyN9RyHpHQYLFl_KkgHwVm1FxurqpYaJrrit_zU5d8R2vKp8nz9qKwlp84HJpr6rpMZFT_HdYtsRlVUAmU4HfXcmi-MyP1cVn5KLSRdR9iWsUDYEn5oyKnN4vGLv7Zzi3Ppbxz9w4BXnIuxOphEAvX7TjEIcTg0SMBZz9d-BNSj58SgA6iHd9FripDp-IghA-EV1C2CtvgxSvNzuZ0FsykssBM5Zg=w937-h937-s-no?authuser=1", 10]; //human remains

function tryAgain() {
    location.reload(true);
}

cast.addEventListener("click",()=>{
    fishing();
});

function fishing() {
    count--;
    if (count <= 0) {
        cast.textContent = "Try Again?";
            cast.addEventListener("click", tryAgain);
        if (totalScore >= 10) {
            winner();
        } else if (totalScore < 10) {
            loss();    
        }
    }
    counterDisplayElem.innerHTML = count;
    
}

function winner() {
    document.getElementById('youwin').style.display = 'inline';
}

function loss() {
    document.getElementById('youwin').style.display = 'none';
}

function addFishValue(fishingIndex) {
    let fishValue = fishingResultImage[fishingIndex][1];
    totalScore = fishValue + totalScore;
    scoringDisplayElem.innerHTML = totalScore;
}

function fishingResult() {
    let number = Math.floor(Math.random() * 100);
        if (number <= 30) {
            addFishValue(0);
            return document.getElementById("result").innerHTML = `<img id="fishid" value="3" alt="black crappie" src="${fishingResultImage[0][0]}" /><p id="caption">Black Crappie - ${fishingResultImage[0][1]} points!</p>`
        } else if (number <= 50) {
            addFishValue(1);
            return document.getElementById("result").innerHTML = `<img id="fishid" value="3" alt="striped bass" src="${fishingResultImage[1][0]}" /><p id="caption">Striped Bass - ${fishingResultImage[1][1]} points!</p>`;
        } else if (number <= 65) {
            addFishValue(2);
            return document.getElementById("result").innerHTML = `<img id="fishid" value="3" alt="largemouth bass" src="${fishingResultImage[2][0]}" /><p id="caption">Largemouth Bass - ${fishingResultImage[2][1]} points!</p>`;
        } else if (number <= 75) {
            addFishValue(3);
            return document.getElementById("result").innerHTML = `<img id="fishid" value="3" alt="rainbow trout" src="${fishingResultImage[3][0]}" /><p id="caption">Rainbow Trout - ${fishingResultImage[3][1]} points!</p>`;    
        } else if (number <= 85) {
            addFishValue(4);
            return document.getElementById("result").innerHTML = `<img id="fishid" value="1" alt="glass bottle" src="${fishingResultImage[4][0]}" /><p id="caption">Glass Bottle - ${fishingResultImage[4][1]} points!</p>`;
        } else if (number <= 90) {
            addFishValue(5);
            return document.getElementById("result").innerHTML = `<img id="fishid" value="1" alt="old newspaper" src="${fishingResultImage[5][0]}" /><p id="caption">Old Newspaper - ${fishingResultImage[5][1]} points!</p>`;
        } else if (number <= 95) {
            addFishValue(6);
            return document.getElementById("result").innerHTML = `<img id="fishid" value="1" alt="boot" src="${fishingResultImage[6][0]}" /><p id="caption">A Single Boot - ${fishingResultImage[6][1]} points!</p>`;
        } else if (number <= 98) {
            addFishValue(7);
            return document.getElementById("result").innerHTML = `<img id="fishid" value="5" alt="vintage casino chips" src="${fishingResultImage[7][0]}" /><p id="caption">Vintage Casino Chips - ${fishingResultImage[7][1]} points!</p>`;
        } else if (number <= 100) {
            addFishValue(8);
            return document.getElementById("result").innerHTML = `<img id="fishid" value="10" alt="human remains" src="${fishingResultImage[8][0]}" /><p id="caption">Human Remains - ${fishingResultImage[8][1]} points!</p>`;
        }
};