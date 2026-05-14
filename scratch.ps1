$code = @"
using System.Drawing;
using System.Drawing.Imaging;

public class ImageProcessor2 {
    public static void Process(string inPath, string outPath) {
        using (Bitmap bmp = new Bitmap(inPath)) {
            using (Bitmap result = new Bitmap(bmp.Width, bmp.Height, PixelFormat.Format32bppArgb)) {
                using (Graphics g = Graphics.FromImage(result)) {
                    g.DrawImage(bmp, 0, 0);
                }
                
                for (int y = 0; y < result.Height; y++) {
                    for (int x = 0; x < result.Width; x++) {
                        Color c = result.GetPixel(x, y);
                        if (c.R > 235 && c.G > 235 && c.B > 235) {
                            result.SetPixel(x, y, Color.Transparent);
                        }
                    }
                }
                result.Save(outPath, ImageFormat.Png);
            }
        }
    }
}
"@

Add-Type -TypeDefinition $code -ReferencedAssemblies System.Drawing

[ImageProcessor2]::Process("C:\Users\Burhan\.gemini\antigravity\brain\ff4f103c-db7d-46b8-b693-e108dac3443b\media__1778533399225.png", "d:\Projek\senja-coffee\public\images\logo.png")
