using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace WindowsFormsApp1
{
    public partial class Form1 : Form
    {
        int rock=1;
        int paper=2;
        int sissors=3;
        int r;
        int userCount;
        int compCount;

        String rstr;
        String pstr;
        String sstr;

        public int randomNum()
        {
            Random rand = new Random();
            int compval = rand.Next(1, 4);
            return compval;
        }
        
        public Form1()
        {
            InitializeComponent();
        }

        private void groupBox1_Enter(object sender, EventArgs e)
        {

        }

        private void btnRock_Click(object sender, EventArgs e)
        {
            game(rock);
            //rstr = rock.ToString();
            //Console.WriteLine(r);
            //uScorelbl.Text = rstr;
        }

        public void game(int uval)
        {
            r = randomNum();
            String ranTstr = r.ToString();
            String uTstr = uval.ToString();
            switch (uTstr + ranTstr)
            {
                case "13":
                case "21":
                case "32":
                    userCount++;
                    uScorelbl.Text = userCount.ToString();
                    break;

                case "31":
                case "12":
                case "23":
                    compCount++;
                    cScorelbl.Text = compCount.ToString();
                    break;

                default:
                    break;
            }
                
        }

       
        private void btnPaper_Click(object sender, EventArgs e)
        {
            game(paper);
        }
    }
}
